my css is mismatching, please check all my files and css:

app/admin/dashboard/page.js:

'use client';

import { useState, useEffect } from 'react';
import '../../globals.css';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
        if (response.ok) {
          const groupedOrders = Object.values(
            data.reduce((acc, order) => {
              const { submissionId } = order;
              if (!acc[submissionId]) {
                acc[submissionId] = {
                  submissionId,
                  itemQuantities: [],
                  deliveryName: order.deliveryName,
                  deliveryContact: order.deliveryContact,
                  deliveryAddress: order.deliveryAddress,
                  status: order.status,
                };
              }
              acc[submissionId].itemQuantities.push({
                item: order.itemName,
                quantity: order.quantity,
              });
              return acc;
            }, {})
          );
          setOrders(groupedOrders);
        } else {
          setError(data.error || 'Failed to fetch orders');
        }
      } catch (err) {
        setError('Error fetching orders');
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (submissionId, newStatus) => {
    try {
      console.log(`Updating status for submissionId: ${submissionId} to ${newStatus}`);
      const response = await fetch(`/api/status/${submissionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      console.log('Response from /api/status/[id]:', data);

      if (response.ok) {
        setOrders(
          orders.map((order) =>
            order.submissionId === submissionId ? { ...order, status: newStatus } : order
          )
        );
        setError(null);
      } else {
        setError(data.error || 'Failed to update status');
      }
    } catch (err) {
      console.error('Error in handleStatusChange:', err);
      setError('Error updating status: ' + err.message);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1 className="admin-dashboard-heading">Admin Dashboard - Orders</h1>

      {error && <p className="admin-dashboard-error">{error}</p>}

      {orders.length > 0 ? (
        <div className="admin-dashboard-table-wrapper">
          <table className="admin-dashboard-table">
            <thead>
              <tr className="admin-dashboard-table-header">
                <th>Order ID</th>
                <th>Items & Quantities</th>
                <th>Delivery Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.submissionId} className="admin-dashboard-table-row">
                  <td className="admin-dashboard-table-cell">{order.submissionId}</td>
                  <td className="admin-dashboard-table-cell">
                    <div className="admin-dashboard-items-container">
                      <ul className="admin-dashboard-items-list">
                        {order.itemQuantities.map((entry, index) => (
                          <li key={index} className="admin-dashboard-item">
                            <span className="admin-dashboard-item-name">{entry.item}:</span>
                            <span>{entry.quantity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  <td className="admin-dashboard-table-cell">{order.deliveryName}</td>
                  <td className="admin-dashboard-table-cell">{order.deliveryContact}</td>
                  <td className="admin-dashboard-table-cell">{order.deliveryAddress}</td>
                  <td className="admin-dashboard-table-cell">
                    <span
                      className={`admin-dashboard-status admin-dashboard-status-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="admin-dashboard-table-cell">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.submissionId, e.target.value)}
                      className="admin-dashboard-status-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="admin-dashboard-no-orders">
          No orders found. If you expect orders, ensure the database is running and configured correctly.
        </p>
      )}
    </div>
  );
}

app/admin/inventory/page.js:

import { db } from '../../../lib/db.js';
import { products } from '../../../lib/schema.js';
import InventoryTable from '../../../components/InventoryTable';
import '../../globals.css';

export default async function Inventory() {
  let productList = [];
  try {
    productList = await db.select().from(products).execute();
    console.log('Fetched products:', productList);

    productList = productList.map((e) => ({
      ...e,
      price: parseFloat(e.price),
    }));
  } catch (error) {
    console.error('Error fetching products during build:', error);
  }

  return (
    <div className="admin-inventory-container">
      <h1 className="admin-inventory-heading">Admin Dashboard - Inventory</h1>
      {productList.length === 0 && (
        <p className="admin-inventory-error">
          No products found. If you expect products, ensure the database is running and configured correctly.
        </p>
      )}
      <InventoryTable initialProducts={productList} />
    </div>
  );
}

app/admin/inventory-management/page.js:

'use client';

import { useState, useEffect } from 'react';
import '../../globals.css';

export default function InventoryManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
  const [editProduct, setEditProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
      } else {
        setError(data.error || 'Failed to fetch products');
      }
    } catch (err) {
      setError('Error fetching products');
    }
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      setError('All fields are required');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          stock: parseInt(newProduct.stock),
        }),
      });
      if (response.ok) {
        setNewProduct({ name: '', price: '', stock: '' });
        fetchProducts();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to add product');
      }
    } catch (err) {
      setError('Error adding product');
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setNewProduct({ name: product.name, price: product.price, stock: product.stock });
  };

  const handleUpdateProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${editProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          stock: parseInt(newProduct.stock),
        }),
      });
      if (response.ok) {
        setEditProduct(null);
        setNewProduct({ name: '', price: '', stock: '' });
        fetchProducts();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to update product');
      }
    } catch (err) {
      setError('Error updating product');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to delete product');
      }
    } catch (err) {
      setError('Error deleting product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inventory-management-container">
      <h1 className="inventory-management-heading">Inventory Management</h1>

      {error && (
        <p className="inventory-management-error">{error}</p>
      )}

      {/* Add/Edit Product Form */}
      <div className="inventory-management-form-card">
        <h2 className="inventory-management-subheading">
          {editProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <div className="inventory-management-form">
          <div className="inventory-management-input-group">
            <label className="inventory-management-label">Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="inventory-management-input"
              placeholder="Enter product name"
            />
          </div>
          <div className="inventory-management-input-group">
            <label className="inventory-management-label">Price</label>
            <input
              type="number"
              step="0.01"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="inventory-management-input"
              placeholder="Enter price"
            />
          </div>
          <div className="inventory-management-input-group">
            <label className="inventory-management-label">Stock</label>
            <input
              type="number"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              className="inventory-management-input"
              placeholder="Enter stock quantity"
            />
          </div>
          <button
            onClick={editProduct ? handleUpdateProduct : handleAddProduct}
            disabled={loading}
            className="inventory-management-button"
          >
            {loading ? 'Processing...' : editProduct ? 'Update Product' : 'Add Product'}
          </button>
          {editProduct && (
            <button
              onClick={() => {
                setEditProduct(null);
                setNewProduct({ name: '', price: '', stock: '' });
              }}
              className="inventory-management-cancel-button"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="inventory-management-product-list-card">
        <h2 className="inventory-management-subheading">Product Catalog</h2>
        {products.length > 0 ? (
          <table className="inventory-management-table">
            <thead>
              <tr className="inventory-management-table-header">
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="inventory-management-table-row">
                  <td className="inventory-management-table-cell">{product.name}</td>
                  <td className="inventory-management-table-cell">${parseFloat(product.price).toFixed(2)}</td>
                  <td className="inventory-management-table-cell">{product.stock}</td>
                  <td className="inventory-management-table-cell">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="inventory-management-edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="inventory-management-delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="inventory-management-no-products">No products found.</p>
        )}
      </div>
    </div>
  );
}

app/order/details/[id]/page.js:

import { db } from '../../../../lib/db';
import { orders } from '../../../../lib/schema';
import { eq } from 'drizzle-orm';
import '../../../globals.css';

export default async function OrderDetails({ params }) {
  const { id } = params;

  let orderDetails = [];
  try {
    orderDetails = await db
      .select()
      .from(orders)
      .where(eq(orders.id, parseInt(id)))
      .execute();

    console.log('Fetched order details:', orderDetails);
  } catch (error) {
    console.error('Error fetching order details:', error);
  }

  if (!orderDetails || orderDetails.length === 0) {
    return (
      <div className="order-details-container container container--sm container--padded">
        <h1 className="order-details-heading heading--lg">Order Details</h1>
        <p className="order-details-error error">
          Order not found. Please check the order ID or try again later.
        </p>
      </div>
    );
  }

  const order = orderDetails[0];
  const relatedOrders = await db
    .select()
    .from(orders)
    .where(eq(orders.submissionId, order.submissionId))
    .execute();

  // Convert totalPrice to a number if it's a string
  const totalPrice = parseFloat(order.totalPrice);

  return (
    <div className="order-details-container container container--sm container--padded">
      <h1 className="order-details-heading heading--lg">Order Details - {id}</h1>
      <div className="order-details-card card">
        <h2 className="order-details-subheading heading--md">Order Information</h2>
        <p>
          <span className="order-details-label">Submission ID:</span> {order.submissionId}
        </p>
        <p>
          <span className="order-details-label">Delivery Name:</span> {order.deliveryName}
        </p>
        <p>
          <span className="order-details-label">Contact:</span> {order.deliveryContact}
        </p>
        <p>
          <span className="order-details-label">Address:</span> {order.deliveryAddress}
        </p>
        <p>
          <span className="order-details-label">Total Price:</span> $
          {isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)}
        </p>
        <p>
          <span className="order-details-label">Status:</span>{' '}
          <span className={`order-details-status status status-${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </p>

        <h3 className="order-details-items-heading heading--sm">Items</h3>
        <ul className="order-details-items-list">
          {relatedOrders.map((item, index) => (
            <li
              key={index}
              className={`order-details-item order-details-item-${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              {item.itemName} - {item.quantity} unit(s)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

app/order/track/page.js:

'use client';

import { useState } from 'react';
import '../../globals.css';


export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async () => {
    setError('');
    setOrderDetails(null);
    setLoading(true);

    if (!orderId.trim()) {
      setError('Please enter an order ID.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/orders/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch order');
      }

      const data = await response.json();
      setOrderDetails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="track-order-main">
      <div className="track-order-container">
        {/* Header */}
        <div className="track-order-header">
          <h1>Track Your Order</h1>
          <p>Enter your order ID to check the status of your delivery.</p>
        </div>

        {/* Form Card */}
        <div className="track-order-form-card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleTrackOrder();
            }}
            className="track-order-form"
          >
            <div className="track-order-input-group">
              <label htmlFor="orderId">Order ID</label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g., order-1746715114042"
                className="track-order-input"
              />
            </div>

            <button
              type="submit"
              className="track-order-button"
              disabled={loading}
            >
              {loading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="track-order-error">
            {error}
          </div>
        )}

        {/* Order Details */}
        {orderDetails && (
          <div className="track-order-details-card">
            <h2>
              Order Details - ID: {orderDetails.mainOrder.submissionId}
            </h2>
            <div className="track-order-details-content">
              <p>
                <span className="track-order-details-label">Delivery Name:</span>{' '}
                {orderDetails.mainOrder.deliveryName}
              </p>
              <p>
                <span className="track-order-details-label">Contact:</span>{' '}
                {orderDetails.mainOrder.deliveryContact}
              </p>
              <p>
                <span className="track-order-details-label">Address:</span>{' '}
                {orderDetails.mainOrder.deliveryAddress}
              </p>
              <p>
                <span className="track-order-details-label">Status:</span>{' '}
                <span
                  className={`track-order-status track-order-status-${orderDetails.mainOrder.status.toLowerCase()}`}
                >
                  {orderDetails.mainOrder.status}
                </span>
              </p>
              <div>
                <h3 className="track-order-items-heading">Items Ordered</h3>
                <ul className="track-order-items-list">
                  {orderDetails.relatedOrders.map((item, index) => (
                    <li
                      key={item.id}
                      className={`track-order-item ${index % 2 === 0 ? 'track-order-item-even' : 'track-order-item-odd'}`}
                    >
                      <span className="track-order-item-name">{item.itemName}</span>
                      <span className="track-order-item-quantity">Qty: {item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

app/layout.js:

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bulk Vegetable/Fruit Ordering Platform',
  description: 'A platform for bulk ordering of vegetables and fruits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout-body`}>
        <nav className="layout-nav">
          <div className="layout-nav-container">
            <a href="/" className="layout-nav-brand">
              AgroFix
            </a>
            <div className="layout-nav-links">
              <a href="/order/track" className="layout-nav-link">
                Track Order
              </a>
              <a href="/admin/dashboard" className="layout-nav-link">
                Admin Dashboard
              </a>
            </div>
          </div>
        </nav>
        <main className="layout-main">{children}</main>
      </body>
    </html>
  );
}

app/page.js:

import { db } from '../lib/db.js';
import { products } from '../lib/schema.js';
import ProductCatalog from '../components/ProductCatalog';
import './globals.css';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const productList = await db.select().from(products).execute();
  console.log('Fetched products:', productList);

  if (!productList || productList.length === 0) {
    return (
      <main className="home-main">
        <h1 className="home-heading">Vegetable & Fruit Catalog</h1>
        <p className="home-error">No products available at the moment.</p>
      </main>
    );
  }

  return (
    <main className="home-main">
      <ProductCatalog initialProducts={productList} />
    </main>
  );
}

let productList;
try {
  productList = await db.select().from(products).execute();
  console.log('Fetched products:', productList);
} catch (error) {
  console.error('Error fetching products:', error);
  productList = [];
}

components/AdminOrderTable.js:

'use client';

import { useState } from 'react';
import '../app/globals.css';

export default function AdminOrderTable({ initialOrders }) {
  const [orders, setOrders] = useState(initialOrders || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateOrderStatus = async (id, newStatus) => {
    console.log('Updating order with ID:', id, 'to status:', newStatus);
    if (!id || typeof id !== 'number') {
      setError(`Invalid order ID: ${id}`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update order status');
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-order-table-wrapper">
      {error && (
        <p className="admin-order-table-error">{error}</p>
      )}
      <table className="admin-order-table">
        <thead>
          <tr className="admin-order-table-header">
            <th>Order ID</th>
            <th>Submission ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Delivery Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id} className="admin-order-table-row">
                <td className="admin-order-table-cell">{order.id}</td>
                <td className="admin-order-table-cell">{order.submissionId}</td>
                <td className="admin-order-table-cell">{order.itemName}</td>
                <td className="admin-order-table-cell">{order.quantity}</td>
                <td className="admin-order-table-cell">{order.deliveryName}</td>
                <td className="admin-order-table-cell">{order.deliveryContact}</td>
                <td className="admin-order-table-cell">{order.deliveryAddress}</td>
                <td className="admin-order-table-cell">{order.status}</td>
                <td className="admin-order-table-cell">
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className="admin-order-table-status-select"
                    disabled={loading}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="admin-order-table-no-data">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

components/InventoryTable.js:

'use client';

import '../app/globals.css';

export default function InventoryTable({ initialProducts }) {
  const products = initialProducts || [];

  return (
    <div className="inventory-table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr className="inventory-table-header">
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => {
              const price = parseFloat(product.price);
              const formattedPrice = isNaN(price) ? 'N/A' : price.toFixed(2);

              return (
                <tr key={product.id} className="inventory-table-row">
                  <td className="inventory-table-cell">{product.id}</td>
                  <td className="inventory-table-cell">{product.name}</td>
                  <td className="inventory-table-cell">${formattedPrice}</td>
                  <td className="inventory-table-cell">{product.stock}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="inventory-table-no-data">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

components/ProductCard.js:

'use client';

import '../app/globals.css';

export default function ProductCard({ product, quantity, onQuantityChange, disabled = false }) {
  const handleChange = (e) => {
    if (!disabled) {
      onQuantityChange(product.id, e.target.value);
    }
  };

  const priceAsNumber = parseFloat(product.price);

  return (
    <div className="product-card">
      <h2 className="product-card-heading">{product.name}</h2>
      <p className="product-card-price">Price: ${priceAsNumber.toFixed(2)}</p>
      <p className="product-card-stock">Stock: {product.stock}</p>
      <div className="product-card-input-group">
        <label htmlFor={`quantity-${product.id}`} className="product-card-label">
          Quantity
        </label>
        <input
          type="number"
          id={`quantity-${product.id}`}
          value={quantity}
          onChange={handleChange}
          min="0"
          disabled={disabled}
          className="product-card-input"
        />
      </div>
    </div>
  );
}

components/ProductCatalog.js:

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from './ProductCard';
import '../app/globals.css';

export default function ProductCatalog({ initialProducts }) {
  const router = useRouter();
  const [products] = useState(initialProducts || []);
  const [cart, setCart] = useState({});
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    contact: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [orderSummary, setOrderSummary] = useState(null);

  const updateQuantity = (id, quantity) => {
    const qty = parseInt(quantity) || 0;
    if (qty < 0) return;
    setCart((prev) => ({ ...prev, [id]: qty }));
  };

  const calculateTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = products.find((p) => p.id === parseInt(id));
      return total + (product ? product.price * quantity : 0);
    }, 0).toFixed(2);
  };

  const validateDeliveryDetails = () => {
    const newErrors = {};
    if (!deliveryDetails.name.trim()) newErrors.name = 'Delivery name is required';
    if (!deliveryDetails.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(deliveryDetails.contact)) {
      newErrors.contact = 'Contact must be a 10-digit number';
    }
    if (!deliveryDetails.address.trim()) newErrors.address = 'Delivery address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const placeBulkOrder = async () => {
    if (!validateDeliveryDetails()) return;

    const selectedItems = Object.entries(cart).filter(([_, qty]) => qty > 0);
    if (selectedItems.length === 0) {
      setErrors({ cart: 'Please select at least one product with a quantity greater than 0' });
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMessage('');

    const submissionId = `order-${Date.now()}`;
    const orders = selectedItems.map(([id, quantity]) => {
      const product = products.find((p) => p.id === parseInt(id));
      if (!product) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return {
        submissionId,
        itemName: product.name,
        quantity,
        deliveryName: deliveryDetails.name,
        deliveryContact: deliveryDetails.contact,
        deliveryAddress: deliveryDetails.address,
      };
    });

    console.log('Orders being sent:', orders);

    if (!orders.every(order => order.submissionId)) {
      setErrors({ submit: 'Submission ID is missing' });
      setLoading(false);
      return;
    }

    setOrderSummary(orders);

    try {
      let lastOrderId = null;
      for (const order of orders) {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(order),
        });

        const data = await response.json();
        console.log('API response:', data);
        if (!response.ok) {
          throw new Error(data.error || 'Failed to place order');
        }
        lastOrderId = data.id;
        if (!lastOrderId) {
          throw new Error('Order ID not returned from API');
        }
      }
      setSuccessMessage('Order placed successfully!');
      setCart({});
      setDeliveryDetails({ name: '', contact: '', address: '' });

      setTimeout(() => {
        router.push(`/order/details/${lastOrderId}`);
      }, 2000);
    } catch (err) {
      setErrors({ submit: err.message });
      setOrderSummary(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <div className="product-catalog-container">
      <h1 className="product-catalog-heading">Vegetable & Fruit Catalog</h1>

      {errors.cart && (
        <p className="product-catalog-error">{errors.cart}</p>
      )}
      {errors.submit && (
        <p className="product-catalog-error">{errors.submit}</p>
      )}
      {successMessage && !orderSummary && (
        <p className="product-catalog-success">{successMessage}</p>
      )}

      <div className="product-catalog-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onQuantityChange={updateQuantity}
            />
          ))
        ) : (
          <p className="product-catalog-no-products">
            No products available.
          </p>
        )}
      </div>

      <div className="product-catalog-total">
        <p className="product-catalog-total-text">
          Total Price: ${calculateTotalPrice()}
        </p>
      </div>

      {orderSummary && (
        <div className="product-catalog-order-summary">
          <h2 className="product-catalog-order-summary-heading">
            Order Summary
          </h2>
          <ul className="product-catalog-order-summary-list">
            {orderSummary.map((item, index) => (
              <li key={index} className="product-catalog-order-summary-item">
                <strong>{item.itemName}</strong>: {item.quantity} unit(s)
              </li>
            ))}
          </ul>
          <p className="product-catalog-order-success">Order placed! Redirecting...</p>
        </div>
      )}

      {!orderSummary && (
        <>
          <div className="product-catalog-delivery-form">
            <h2 className="product-catalog-delivery-heading">
              Delivery Details
            </h2>
            <div className="product-catalog-delivery-form-content">
              <div className="product-catalog-input-group">
                <label htmlFor="name" className="product-catalog-label">
                  Delivery Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={deliveryDetails.name}
                  onChange={handleDeliveryChange}
                  placeholder="Enter your name"
                  className="product-catalog-input"
                />
                {errors.name && (
                  <p className="product-catalog-error-text">{errors.name}</p>
                )}
              </div>
              <div className="product-catalog-input-group">
                <label htmlFor="contact" className="product-catalog-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={deliveryDetails.contact}
                  onChange={handleDeliveryChange}
                  placeholder="Enter 10-digit contact number"
                  className="product-catalog-input"
                />
                {errors.contact && (
                  <p className="product-catalog-error-text">{errors.contact}</p>
                )}
              </div>
              <div className="product-catalog-input-group">
                <label htmlFor="address" className="product-catalog-label">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={deliveryDetails.address}
                  onChange={handleDeliveryChange}
                  placeholder="Enter your delivery address"
                  className="product-catalog-textarea"
                  rows="3"
                />
                {errors.address && (
                  <p className="product-catalog-error-text">{errors.address}</p>
                )}
              </div>
            </div>
          </div>

          <div className="product-catalog-button-wrapper">
            <button
              onClick={placeBulkOrder}
              className="product-catalog-submit-button"
              disabled={loading}
            >
              {loading ? 'Placing Order...' : 'Place Bulk Order'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

app/globals.css:

/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Define CSS variables for reuse */
:root {
  /* Colors */
  --primary-green: #388e3c;
  --primary-green-dark: #2e7d32;
  --green-light: #c8e6c9;
  --green-bg-light: #e7f3e7;
  --green-bg-table: #f0f9f0;
  --green-bg-table-hover: #e0f2e0;
  --green-text: #2f855a;
  --blue: #1976d2;
  --blue-dark: #1565c0;
  --blue-light: #bee3f8;
  --blue-text: #2b6cb0;
  --yellow-light: #fefcbf;
  --yellow-text: #744210;
  --red: #c62828;
  --red-dark: #b71c1c;
  --red-bg: #fef2f2;
  --red-border: #f5c6cb;
  --gray: #6b6b6b;
  --gray-light: #f5f5f5;
  --gray-medium: #bdbdbd;
  --gray-dark: #4a4a4a;
  --gray-darker: #2d2d2d;
  --black: #1a1a1a;
  --white: #fff;
  --border: #d1d1d1;
  --border-green: #d1e7d1;

  /* Shadows */
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 10px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 15px 40px rgba(0, 0, 0, 0.15);
  --shadow-text: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-text-sm: 0 1px 3px rgba(0, 0, 0, 0.1);

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 0.75rem;
  --spacing-lg: 1rem;
  --spacing-xl: 1.5rem;
  --spacing-2xl: 2rem;
  --spacing-3xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;

  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
}

/* Base styles */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--gray-darker);
  background: var(--gray-light);
  min-height: 100vh;
}

/* Common container styles */
.container {
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--green-bg-light) 0%, var(--gray-light) 50%, var(--green-bg-light) 100%);
}

.container--sm { max-width: 32rem; }
.container--md { max-width: 40rem; }
.container--lg { max-width: 80rem; }

.container--padded {
  padding: var(--spacing-3xl) var(--spacing-lg);
}

/* Common card styles */
.card {
  background: var(--white);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-green);
  padding: var(--spacing-2xl);
  transition: box-shadow 0.5s ease;
}

.card:hover {
  box-shadow: var(--shadow-xl);
}

/* Common heading styles */
.heading--lg {
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--black);
  text-shadow: var(--shadow-text);
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.heading--md {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--black);
  margin-bottom: var(--spacing-lg);
}

.heading--sm {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--black);
  margin: var(--spacing-lg) 0 var(--spacing-sm);
}

/* Common error styles */
.error {
  background: var(--red-bg);
  border: 1px solid var(--red-border);
  color: var(--red);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
  text-align: center;
}

.error--sm {
  font-size: var(--text-xs);
  margin-top: var(--spacing-xs);
}

/* Common success message */
.success {
  color: var(--green-text);
  text-align: center;
  font-size: var(--text-sm);
}

/* Common status badge */
.status {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
}

.status--pending {
  background: var(--yellow-light);
  color: var(--yellow-text);
}

.status--shipped {
  background: var(--blue-light);
  color: var(--blue-text);
}

.status--delivered {
  background: var(--green-bg-light);
  color: var(--green-text);
}

/* Common table styles */
.table-wrapper {
  overflow-x: auto;
}

.table {
  width: 100%;
  background: var(--white);
  border: 1px solid var(--border);
  border-collapse: collapse;
  text-align: left;
}

.table-header th {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-bottom: 1px solid var(--border);
}

.table-row {
  border-bottom: 1px solid var(--border);
}

.table-row:hover {
  background: rgba(200, 230, 201, 0.3);
}

.table-cell {
  padding: var(--spacing-sm) var(--spacing-lg);
}

/* Common form styles */
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.input-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--gray-darker);
  margin-bottom: var(--spacing-xs);
}

.input,
.textarea {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
  width: 100%;
  font-size: var(--text-base);
  transition: all 0.3s ease;
}

.input::placeholder,
.textarea::placeholder {
  color: #a0a0a0;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
}

/* Common button styles */
.button {
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: var(--radius-sm);
  font-size: var(--text-lg);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button--primary {
  background: linear-gradient(to right, #4caf50, var(--primary-green));
  color: var(--white);
  box-shadow: var(--shadow-md);
}

.button--primary:hover:not(:disabled) {
  background: linear-gradient(to right, var(--primary-green), var(--primary-green-dark));
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.button--primary:disabled {
  background: var(--gray-medium);
  cursor: not-allowed;
  transform: scale(1);
}

.button--secondary {
  background: var(--blue);
  color: var(--white);
}

.button--secondary:hover:not(:disabled) {
  background: var(--blue-dark);
}

.button--secondary:disabled {
  background: var(--gray-medium);
  cursor: not-allowed;
}

/* Navigation */
.layout-nav {
  background: var(--primary-green);
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--primary-green-dark);
}

.layout-nav-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: var(--spacing-lg);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.layout-nav-brand {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--white);
  transition: color 0.3s ease;
}

.layout-nav-brand:hover {
  color: var(--green-light);
}

.layout-nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.layout-nav-link {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--white);
  color: var(--primary-green);
  border-radius: var(--radius-sm);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.layout-nav-link:hover {
  background: var(--green-bg-light);
  color: var(--primary-green-dark);
}

/* Track Order Page */
.track-order-main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.track-order-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.track-order-header {
  text-align: center;
}

.track-order-header p {
  font-size: var(--text-base);
  color: var(--gray-dark);
  line-height: 1.5;
}

.track-order-form {
  max-width: 24rem;
  margin: 0 auto;
}

.track-order-input {
  max-width: 24rem;
  display: block;
  margin: 0 auto;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  background: var(--white);
}

.track-order-input:hover {
  border-color: #a3d39c;
}

.track-order-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2), 0 6px 15px rgba(0, 0, 0, 0.1);
}

.track-order-button {
  max-width: 24rem;
  display: block;
  margin: 0 auto;
}

.track-order-details-card {
  max-width: 24rem;
  margin: 0 auto;
}

.track-order-details-content {
  color: var(--gray-dark);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.track-order-items-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.track-order-item {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--green-bg-light);
  transition: all 0.2s ease;
}

.track-order-item-even {
  background: var(--green-bg-table);
}

.track-order-item-even:hover {
  background: var(--green-bg-table-hover);
}

.track-order-item-odd {
  background: var(--gray-light);
}

.track-order-item-odd:hover {
  background: #e8e8e8;
}

.track-order-item-name {
  font-weight: 500;
  color: var(--black);
}

.track-order-item-quantity {
  font-size: var(--text-sm);
  color: var(--gray);
}

/* Order Details Page */
.order-details-card p {
  color: var(--gray-dark);
  margin-bottom: var(--spacing-sm);
}

.order-details-items-list {
  list-style: disc;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.order-details-item {
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  border: 1px solid var(--green-bg-light);
  transition: all 0.2s ease;
}

.order-details-item-even {
  background: var(--green-bg-table);
}

.order-details-item-even:hover {
  background: var(--green-bg-table-hover);
}

.order-details-item-odd {
  background: var(--gray-light);
}

.order-details-item-odd:hover {
  background: #e8e8e8;
}

/* Admin Dashboard Page */
.admin-dashboard-table-header {
  background: var(--green-bg-table);
  color: var(--green-text);
}

.admin-dashboard-table-cell {
  color: var(--gray-darker);
  font-weight: 500;
}

.admin-dashboard-items-container {
  display: flex;
  justify-content: center;
}

.admin-dashboard-items-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  text-align: center;
  width: 12rem;
}

.admin-dashboard-item {
  display: flex;
  justify-content: space-between;
}

.admin-dashboard-item-name {
  font-weight: 500;
}

.admin-dashboard-status {
  padding: var(--spacing-xs) var(--spacing-md);
}

.admin-dashboard-status-select {
  color: var(--gray-dark);
  font-size: var(--text-sm);
}

.admin-dashboard-status-select:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
}

.admin-dashboard-no-orders {
  background: var(--gray-light);
  color: var(--gray);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

/* Admin Order Table */
.admin-order-table-error {
  margin-bottom: var(--spacing-lg);
}

.admin-order-table-status-select {
  padding: var(--spacing-xs);
}

.admin-order-table-status-select:disabled {
  background: var(--gray-light);
}

.admin-order-table-no-data {
  text-align: center;
  color: var(--gray);
}

/* Inventory Table */
.inventory-table-no-data {
  text-align: center;
  color: var(--gray);
}

/* Product Card */
.product-card-price,
.product-card-stock {
  color: var(--gray-dark);
  margin-top: var(--spacing-sm);
}

/* Product Catalog */
.product-catalog-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.product-catalog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-2xl);
}

.product-catalog-no-products {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--gray);
}

.product-catalog-total {
  text-align: center;
}

.product-catalog-total-text {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--black);
}

.product-catalog-order-summary-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.product-catalog-order-summary-item {
  color: var(--gray-dark);
}

.product-catalog-order-success {
  margin-top: var(--spacing-lg);
}

.product-catalog-delivery-form-content {
  gap: var(--spacing-lg);
}

.product-catalog-textarea {
  resize: vertical;
}

.product-catalog-button-wrapper {
  display: flex;
  justify-content: center;
}

/* Inventory Management Page */
.inventory-management-button {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--text-base);
  font-weight: 500;
}

.inventory-management-cancel-button {
  margin-left: var(--spacing-lg);
  color: var(--gray);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color 0.3s ease;
}

.inventory-management-cancel-button:hover {
  color: var(--gray-darker);
  text-decoration: underline;
}

.inventory-management-table-header {
  background: var(--gray-light);
}

.inventory-management-edit-button {
  color: var(--blue);
  margin-right: var(--spacing-lg);
  text-decoration: none;
  transition: color 0.3s ease;
}

.inventory-management-edit-button:hover {
  color: var(--blue-dark);
  text-decoration: underline;
}

.inventory-management-delete-button {
  color: var(--red);
  text-decoration: none;
  transition: color 0.3s ease;
}

.inventory-management-delete-button:hover {
  color: var(--red-dark);
  text-decoration: underline;
}

.inventory-management-no-products {
  color: var(--gray);
  font-size: var(--text-sm);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container--padded,
  .layout-main,
  .home-main {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  .heading--lg,
  .home-heading,
  .product-catalog-heading,
  .admin-dashboard-heading,
  .admin-inventory-heading,
  .inventory-management-heading {
    font-size: var(--text-3xl);
  }

  .card,
  .product-catalog-delivery-form,
  .product-catalog-order-summary {
    padding: var(--spacing-xl);
  }

  .table-cell,
  .admin-dashboard-table-cell,
  .inventory-management-table-cell {
    padding: var(--spacing-sm);
  }

  .layout-nav-links {
    margin-top: 0;
  }

  .product-catalog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container--padded,
  .layout-main,
  .home-main,
  .admin-dashboard-container,
  .admin-inventory-container,
  .inventory-management-container {
    padding: var(--spacing-3xl) var(--spacing-2xl);
  }

  .product-catalog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

also please do update your memory with these files;

and add - & + in Vegetable & Fruit Catalog for placing bulk order