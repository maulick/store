/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/orders/track/route";
exports.ids = ["app/api/orders/track/route"];
exports.modules = {

/***/ "(rsc)/./app/api/orders/track/route.js":
/*!***************************************!*\
  !*** ./app/api/orders/track/route.js ***!
  \***************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/db.js */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/schema.js */ \"(rsc)/./lib/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function POST(request) {\n    try {\n        const { orderId } = await request.json();\n        if (!orderId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: 'Order ID is required'\n            }, {\n                status: 400\n            });\n        }\n        // Search by submissionId\n        let order = await _lib_db_js__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.eq)(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders.submissionId, orderId)).execute();\n        // If no order found, try searching by id\n        if (order.length === 0) {\n            const parsedId = parseInt(orderId);\n            if (!isNaN(parsedId)) {\n                order = await _lib_db_js__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.eq)(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders.id, parsedId)).execute();\n            }\n        }\n        if (order.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: 'Order not found'\n            }, {\n                status: 404\n            });\n        }\n        // Fetch related orders with the same submissionId\n        const relatedOrders = await _lib_db_js__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.eq)(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders.submissionId, order[0].submissionId)).execute();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            mainOrder: order[0],\n            relatedOrders\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error fetching order:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Failed to fetch order'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVycy90cmFjay9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNRO0FBQ2xCO0FBQ1U7QUFFcEMsZUFBZUksS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO1FBRXRDLElBQUksQ0FBQ0QsU0FBUztZQUNaLE9BQU9ILHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBdUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzVFO1FBRUEseUJBQXlCO1FBQ3pCLElBQUlDLFFBQVEsTUFBTVYsMENBQUVBLENBQ2pCVyxNQUFNLEdBQ05DLElBQUksQ0FBQ1gsa0RBQU1BLEVBQ1hZLEtBQUssQ0FBQ1gsK0NBQUVBLENBQUNELGtEQUFNQSxDQUFDYSxZQUFZLEVBQUVSLFVBQzlCUyxPQUFPO1FBRVYseUNBQXlDO1FBQ3pDLElBQUlMLE1BQU1NLE1BQU0sS0FBSyxHQUFHO1lBQ3RCLE1BQU1DLFdBQVdDLFNBQVNaO1lBQzFCLElBQUksQ0FBQ2EsTUFBTUYsV0FBVztnQkFDcEJQLFFBQVEsTUFBTVYsMENBQUVBLENBQ2JXLE1BQU0sR0FDTkMsSUFBSSxDQUFDWCxrREFBTUEsRUFDWFksS0FBSyxDQUFDWCwrQ0FBRUEsQ0FBQ0Qsa0RBQU1BLENBQUNtQixFQUFFLEVBQUVILFdBQ3BCRixPQUFPO1lBQ1o7UUFDRjtRQUVBLElBQUlMLE1BQU1NLE1BQU0sS0FBSyxHQUFHO1lBQ3RCLE9BQU9iLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBa0IsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3ZFO1FBRUEsa0RBQWtEO1FBQ2xELE1BQU1ZLGdCQUFnQixNQUFNckIsMENBQUVBLENBQzNCVyxNQUFNLEdBQ05DLElBQUksQ0FBQ1gsa0RBQU1BLEVBQ1hZLEtBQUssQ0FBQ1gsK0NBQUVBLENBQUNELGtEQUFNQSxDQUFDYSxZQUFZLEVBQUVKLEtBQUssQ0FBQyxFQUFFLENBQUNJLFlBQVksR0FDbkRDLE9BQU87UUFFVixPQUFPWixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVlLFdBQVdaLEtBQUssQ0FBQyxFQUFFO1lBQUVXO1FBQWMsR0FBRztZQUFFWixRQUFRO1FBQUk7SUFDakYsRUFBRSxPQUFPRCxPQUFPO1FBQ2RlLFFBQVFmLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU9MLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvbW1ldGthci9wcmFjdGljZS9idWxrLW9yZGVyLXBsYXRmb3JtL2FwcC9hcGkvb3JkZXJzL3RyYWNrL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RiLmpzJztcbmltcG9ydCB7IG9yZGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zY2hlbWEuanMnO1xuaW1wb3J0IHsgZXEgfSBmcm9tICdkcml6emxlLW9ybSc7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IG9yZGVySWQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgaWYgKCFvcmRlcklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ09yZGVyIElEIGlzIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIC8vIFNlYXJjaCBieSBzdWJtaXNzaW9uSWRcbiAgICBsZXQgb3JkZXIgPSBhd2FpdCBkYlxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuZnJvbShvcmRlcnMpXG4gICAgICAud2hlcmUoZXEob3JkZXJzLnN1Ym1pc3Npb25JZCwgb3JkZXJJZCkpXG4gICAgICAuZXhlY3V0ZSgpO1xuXG4gICAgLy8gSWYgbm8gb3JkZXIgZm91bmQsIHRyeSBzZWFyY2hpbmcgYnkgaWRcbiAgICBpZiAob3JkZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwYXJzZWRJZCA9IHBhcnNlSW50KG9yZGVySWQpO1xuICAgICAgaWYgKCFpc05hTihwYXJzZWRJZCkpIHtcbiAgICAgICAgb3JkZXIgPSBhd2FpdCBkYlxuICAgICAgICAgIC5zZWxlY3QoKVxuICAgICAgICAgIC5mcm9tKG9yZGVycylcbiAgICAgICAgICAud2hlcmUoZXEob3JkZXJzLmlkLCBwYXJzZWRJZCkpXG4gICAgICAgICAgLmV4ZWN1dGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JkZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ09yZGVyIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICAvLyBGZXRjaCByZWxhdGVkIG9yZGVycyB3aXRoIHRoZSBzYW1lIHN1Ym1pc3Npb25JZFxuICAgIGNvbnN0IHJlbGF0ZWRPcmRlcnMgPSBhd2FpdCBkYlxuICAgICAgLnNlbGVjdCgpXG4gICAgICAuZnJvbShvcmRlcnMpXG4gICAgICAud2hlcmUoZXEob3JkZXJzLnN1Ym1pc3Npb25JZCwgb3JkZXJbMF0uc3VibWlzc2lvbklkKSlcbiAgICAgIC5leGVjdXRlKCk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtYWluT3JkZXI6IG9yZGVyWzBdLCByZWxhdGVkT3JkZXJzIH0sIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3JkZXI6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGZldGNoIG9yZGVyJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImRiIiwib3JkZXJzIiwiZXEiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsIm9yZGVySWQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJvcmRlciIsInNlbGVjdCIsImZyb20iLCJ3aGVyZSIsInN1Ym1pc3Npb25JZCIsImV4ZWN1dGUiLCJsZW5ndGgiLCJwYXJzZWRJZCIsInBhcnNlSW50IiwiaXNOYU4iLCJpZCIsInJlbGF0ZWRPcmRlcnMiLCJtYWluT3JkZXIiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/track/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"(rsc)/./node_modules/dotenv/config.js\");\n/* harmony import */ var drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/node-postgres */ \"(rsc)/./node_modules/drizzle-orm/node-postgres/driver.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_1__, drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__]);\n([pg__WEBPACK_IMPORTED_MODULE_1__, drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n //This loads .env\n\n\nconsole.log('Using DATABASE_URL:', process.env.DATABASE_URL);\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nconst db = (0,drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__.drizzle)(pool);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QixDQUFDLGlCQUFpQjtBQUNXO0FBQzFCO0FBRTFCRSxRQUFRQyxHQUFHLENBQUMsdUJBQXVCQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFM0QsTUFBTUMsT0FBTyxJQUFJTixvQ0FBSUEsQ0FBQztJQUNwQk8sa0JBQWtCSixRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDNUM7QUFFTyxNQUFNRyxLQUFLVCxrRUFBT0EsQ0FBQ08sTUFBTSIsInNvdXJjZXMiOlsiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2UvYnVsay1vcmRlci1wbGF0Zm9ybS9saWIvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdkb3RlbnYvY29uZmlnJzsgLy9UaGlzIGxvYWRzIC5lbnZcbmltcG9ydCB7IGRyaXp6bGUgfSBmcm9tICdkcml6emxlLW9ybS9ub2RlLXBvc3RncmVzJztcbmltcG9ydCB7IFBvb2wgfSBmcm9tICdwZyc7XG5cbmNvbnNvbGUubG9nKCdVc2luZyBEQVRBQkFTRV9VUkw6JywgcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgY29ubmVjdGlvblN0cmluZzogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxufSk7XG5cbmV4cG9ydCBjb25zdCBkYiA9IGRyaXp6bGUocG9vbCk7Il0sIm5hbWVzIjpbImRyaXp6bGUiLCJQb29sIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJwb29sIiwiY29ubmVjdGlvblN0cmluZyIsImRiIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/schema.js":
/*!***********************!*\
  !*** ./lib/schema.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orders: () => (/* binding */ orders),\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/serial.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/numeric.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n\nconst products = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('products', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)('id').primaryKey(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('name').notNull(),\n    price: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.decimal)('price', {\n        precision: 10,\n        scale: 2\n    }).notNull(),\n    stock: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)('stock').notNull()\n});\nconst orders = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('orders', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)('id').primaryKey(),\n    submissionId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('submission_id').notNull(),\n    itemName: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('item_name').notNull(),\n    quantity: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)('quantity').notNull(),\n    deliveryName: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_name').notNull(),\n    deliveryContact: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_contact').notNull(),\n    deliveryAddress: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_address').notNull(),\n    status: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('status').default('Pending'),\n    totalPrice: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.decimal)('totalPrice', {\n        precision: 10,\n        scale: 2\n    }).notNull().default('0.00')\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc2NoZW1hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFFdkUsTUFBTUssV0FBV0wsNERBQU9BLENBQUMsWUFBWTtJQUMxQ00sSUFBSUwsMkRBQU1BLENBQUMsTUFBTU0sVUFBVTtJQUMzQkMsTUFBTU4seURBQUlBLENBQUMsUUFBUU8sT0FBTztJQUMxQkMsT0FBT1AsNERBQU9BLENBQUMsU0FBUztRQUFFUSxXQUFXO1FBQUlDLE9BQU87SUFBRSxHQUFHSCxPQUFPO0lBQzVESSxPQUFPVCw0REFBT0EsQ0FBQyxTQUFTSyxPQUFPO0FBQ2pDLEdBQUc7QUFFSSxNQUFNSyxTQUFTZCw0REFBT0EsQ0FBQyxVQUFVO0lBQ3RDTSxJQUFJTCwyREFBTUEsQ0FBQyxNQUFNTSxVQUFVO0lBQzNCUSxjQUFjYix5REFBSUEsQ0FBQyxpQkFBaUJPLE9BQU87SUFDM0NPLFVBQVVkLHlEQUFJQSxDQUFDLGFBQWFPLE9BQU87SUFDbkNRLFVBQVViLDREQUFPQSxDQUFDLFlBQVlLLE9BQU87SUFDckNTLGNBQWNoQix5REFBSUEsQ0FBQyxpQkFBaUJPLE9BQU87SUFDM0NVLGlCQUFpQmpCLHlEQUFJQSxDQUFDLG9CQUFvQk8sT0FBTztJQUNqRFcsaUJBQWlCbEIseURBQUlBLENBQUMsb0JBQW9CTyxPQUFPO0lBQ2pEWSxRQUFRbkIseURBQUlBLENBQUMsVUFBVW9CLE9BQU8sQ0FBQztJQUMvQkMsWUFBWXBCLDREQUFPQSxDQUFDLGNBQWM7UUFBRVEsV0FBVztRQUFJQyxPQUFPO0lBQUUsR0FBR0gsT0FBTyxHQUFHYSxPQUFPLENBQUM7QUFDbkYsR0FBRyIsInNvdXJjZXMiOlsiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2UvYnVsay1vcmRlci1wbGF0Zm9ybS9saWIvc2NoZW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBnVGFibGUsIHNlcmlhbCwgdGV4dCwgZGVjaW1hbCwgaW50ZWdlciB9IGZyb20gJ2RyaXp6bGUtb3JtL3BnLWNvcmUnO1xuXG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBwZ1RhYmxlKCdwcm9kdWN0cycsIHtcbiAgaWQ6IHNlcmlhbCgnaWQnKS5wcmltYXJ5S2V5KCksXG4gIG5hbWU6IHRleHQoJ25hbWUnKS5ub3ROdWxsKCksXG4gIHByaWNlOiBkZWNpbWFsKCdwcmljZScsIHsgcHJlY2lzaW9uOiAxMCwgc2NhbGU6IDIgfSkubm90TnVsbCgpLCAvLyBFbnN1cmUgZGVjaW1hbCB0eXBlXG4gIHN0b2NrOiBpbnRlZ2VyKCdzdG9jaycpLm5vdE51bGwoKSxcbn0pO1xuXG5leHBvcnQgY29uc3Qgb3JkZXJzID0gcGdUYWJsZSgnb3JkZXJzJywge1xuICBpZDogc2VyaWFsKCdpZCcpLnByaW1hcnlLZXkoKSxcbiAgc3VibWlzc2lvbklkOiB0ZXh0KCdzdWJtaXNzaW9uX2lkJykubm90TnVsbCgpLFxuICBpdGVtTmFtZTogdGV4dCgnaXRlbV9uYW1lJykubm90TnVsbCgpLFxuICBxdWFudGl0eTogaW50ZWdlcigncXVhbnRpdHknKS5ub3ROdWxsKCksXG4gIGRlbGl2ZXJ5TmFtZTogdGV4dCgnZGVsaXZlcnlfbmFtZScpLm5vdE51bGwoKSxcbiAgZGVsaXZlcnlDb250YWN0OiB0ZXh0KCdkZWxpdmVyeV9jb250YWN0Jykubm90TnVsbCgpLFxuICBkZWxpdmVyeUFkZHJlc3M6IHRleHQoJ2RlbGl2ZXJ5X2FkZHJlc3MnKS5ub3ROdWxsKCksXG4gIHN0YXR1czogdGV4dCgnc3RhdHVzJykuZGVmYXVsdCgnUGVuZGluZycpLFxuICB0b3RhbFByaWNlOiBkZWNpbWFsKCd0b3RhbFByaWNlJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KS5ub3ROdWxsKCkuZGVmYXVsdCgnMC4wMCcpLCBcbn0pO1xuXG4iXSwibmFtZXMiOlsicGdUYWJsZSIsInNlcmlhbCIsInRleHQiLCJkZWNpbWFsIiwiaW50ZWdlciIsInByb2R1Y3RzIiwiaWQiLCJwcmltYXJ5S2V5IiwibmFtZSIsIm5vdE51bGwiLCJwcmljZSIsInByZWNpc2lvbiIsInNjYWxlIiwic3RvY2siLCJvcmRlcnMiLCJzdWJtaXNzaW9uSWQiLCJpdGVtTmFtZSIsInF1YW50aXR5IiwiZGVsaXZlcnlOYW1lIiwiZGVsaXZlcnlDb250YWN0IiwiZGVsaXZlcnlBZGRyZXNzIiwic3RhdHVzIiwiZGVmYXVsdCIsInRvdGFsUHJpY2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/schema.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Ftrack%2Froute&page=%2Fapi%2Forders%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Ftrack%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Ftrack%2Froute&page=%2Fapi%2Forders%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Ftrack%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mmetkar_practice_bulk_order_platform_app_api_orders_track_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/track/route.js */ \"(rsc)/./app/api/orders/track/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_mmetkar_practice_bulk_order_platform_app_api_orders_track_route_js__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_mmetkar_practice_bulk_order_platform_app_api_orders_track_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/track/route\",\n        pathname: \"/api/orders/track\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/track/route\"\n    },\n    resolvedPagePath: \"/Users/mmetkar/practice/bulk-order-platform/app/api/orders/track/route.js\",\n    nextConfigOutput,\n    userland: _Users_mmetkar_practice_bulk_order_platform_app_api_orders_track_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZ0cmFjayUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGb3JkZXJzJTJGdHJhY2slMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZvcmRlcnMlMkZ0cmFjayUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1tZXRrYXIlMkZwcmFjdGljZSUyRmJ1bGstb3JkZXItcGxhdGZvcm0lMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbW1ldGthciUyRnByYWN0aWNlJTJGYnVsay1vcmRlci1wbGF0Zm9ybSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9tbWV0a2FyL3ByYWN0aWNlL2J1bGstb3JkZXItcGxhdGZvcm0vYXBwL2FwaS9vcmRlcnMvdHJhY2svcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29yZGVycy90cmFjay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29yZGVycy90cmFja1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb3JkZXJzL3RyYWNrL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2UvYnVsay1vcmRlci1wbGF0Zm9ybS9hcHAvYXBpL29yZGVycy90cmFjay9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Ftrack%2Froute&page=%2Fapi%2Forders%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Ftrack%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/drizzle-orm","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Ftrack%2Froute&page=%2Fapi%2Forders%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Ftrack%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fbulk-order-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();