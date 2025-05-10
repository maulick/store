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
exports.id = "app/api/orders/route";
exports.ids = ["app/api/orders/route"];
exports.modules = {

/***/ "(rsc)/./app/api/orders/route.js":
/*!*********************************!*\
  !*** ./app/api/orders/route.js ***!
  \*********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db.js */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_schema_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/schema.js */ \"(rsc)/./lib/schema.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db_js__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { submissionId, itemName, quantity, deliveryName, deliveryContact, deliveryAddress, totalPrice } = body;\n        if (!submissionId || !itemName || !quantity || !deliveryName || !deliveryContact || !deliveryAddress || totalPrice === undefined) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                error: 'Missing required fields'\n            }, {\n                status: 400\n            });\n        }\n        const newOrder = await _lib_db_js__WEBPACK_IMPORTED_MODULE_0__.db.insert(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders).values({\n            submissionId,\n            itemName,\n            quantity,\n            deliveryName,\n            deliveryContact,\n            deliveryAddress,\n            status: 'Pending',\n            totalPrice: parseFloat(totalPrice)\n        }).returning();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(newOrder[0], {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error creating order:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Failed to create order'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET() {\n    try {\n        const allOrders = await _lib_db_js__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_lib_schema_js__WEBPACK_IMPORTED_MODULE_1__.orders).execute();\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(allOrders, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error fetching orders:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: 'Failed to fetch orders'\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL29yZGVycy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ0w7QUFFcEMsZUFBZUcsS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBQy9CLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsVUFBVSxFQUFFLEdBQUdSO1FBRXpHLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsbUJBQW1CLENBQUNDLG1CQUFtQkMsZUFBZUMsV0FBVztZQUNoSSxPQUFPWixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO2dCQUFFUyxPQUFPO1lBQTBCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMvRTtRQUVBLE1BQU1DLFdBQVcsTUFBTWpCLDBDQUFFQSxDQUN0QmtCLE1BQU0sQ0FBQ2pCLGtEQUFNQSxFQUNia0IsTUFBTSxDQUFDO1lBQ05aO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FJLFFBQVE7WUFDUkgsWUFBWU8sV0FBV1A7UUFDekIsR0FDQ1EsU0FBUztRQUVaLE9BQU9uQixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDVyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQUVELFFBQVE7UUFBSTtJQUN0RCxFQUFFLE9BQU9ELE9BQU87UUFDZE8sUUFBUVAsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBT2IscURBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFUyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0FBQ0Y7QUFFTyxlQUFlTztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsWUFBWSxNQUFNeEIsMENBQUVBLENBQUN5QixNQUFNLEdBQUdDLElBQUksQ0FBQ3pCLGtEQUFNQSxFQUFFMEIsT0FBTztRQUN4RCxPQUFPekIscURBQVlBLENBQUNJLElBQUksQ0FBQ2tCLFdBQVc7WUFBRVIsUUFBUTtRQUFJO0lBQ3BELEVBQUUsT0FBT0QsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPYixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVTLE9BQU87UUFBeUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDOUU7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2Uvc3RvcmUvYXBwL2FwaS9vcmRlcnMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9saWIvZGIuanMnO1xuICBpbXBvcnQgeyBvcmRlcnMgfSBmcm9tICcuLi8uLi8uLi9saWIvc2NoZW1hLmpzJztcbiAgaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgY29uc3QgeyBzdWJtaXNzaW9uSWQsIGl0ZW1OYW1lLCBxdWFudGl0eSwgZGVsaXZlcnlOYW1lLCBkZWxpdmVyeUNvbnRhY3QsIGRlbGl2ZXJ5QWRkcmVzcywgdG90YWxQcmljZSB9ID0gYm9keTtcblxuICAgICAgaWYgKCFzdWJtaXNzaW9uSWQgfHwgIWl0ZW1OYW1lIHx8ICFxdWFudGl0eSB8fCAhZGVsaXZlcnlOYW1lIHx8ICFkZWxpdmVyeUNvbnRhY3QgfHwgIWRlbGl2ZXJ5QWRkcmVzcyB8fCB0b3RhbFByaWNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBkYlxuICAgICAgICAuaW5zZXJ0KG9yZGVycylcbiAgICAgICAgLnZhbHVlcyh7XG4gICAgICAgICAgc3VibWlzc2lvbklkLFxuICAgICAgICAgIGl0ZW1OYW1lLFxuICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICAgIGRlbGl2ZXJ5TmFtZSxcbiAgICAgICAgICBkZWxpdmVyeUNvbnRhY3QsXG4gICAgICAgICAgZGVsaXZlcnlBZGRyZXNzLFxuICAgICAgICAgIHN0YXR1czogJ1BlbmRpbmcnLFxuICAgICAgICAgIHRvdGFsUHJpY2U6IHBhcnNlRmxvYXQodG90YWxQcmljZSksXG4gICAgICAgIH0pXG4gICAgICAgIC5yZXR1cm5pbmcoKTtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG5ld09yZGVyWzBdLCB7IHN0YXR1czogMjAxIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBvcmRlcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgb3JkZXInIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsT3JkZXJzID0gYXdhaXQgZGIuc2VsZWN0KCkuZnJvbShvcmRlcnMpLmV4ZWN1dGUoKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhbGxPcmRlcnMsIHsgc3RhdHVzOiAyMDAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9yZGVyczonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBvcmRlcnMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuICB9Il0sIm5hbWVzIjpbImRiIiwib3JkZXJzIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsInN1Ym1pc3Npb25JZCIsIml0ZW1OYW1lIiwicXVhbnRpdHkiLCJkZWxpdmVyeU5hbWUiLCJkZWxpdmVyeUNvbnRhY3QiLCJkZWxpdmVyeUFkZHJlc3MiLCJ0b3RhbFByaWNlIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJzdGF0dXMiLCJuZXdPcmRlciIsImluc2VydCIsInZhbHVlcyIsInBhcnNlRmxvYXQiLCJyZXR1cm5pbmciLCJjb25zb2xlIiwiR0VUIiwiYWxsT3JkZXJzIiwic2VsZWN0IiwiZnJvbSIsImV4ZWN1dGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/orders/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"(rsc)/./node_modules/dotenv/config.js\");\n/* harmony import */ var drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/node-postgres */ \"(rsc)/./node_modules/drizzle-orm/node-postgres/driver.js\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_1__, drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__]);\n([pg__WEBPACK_IMPORTED_MODULE_1__, drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n //This loads .env\n\n\nconsole.log('Using DATABASE_URL:', process.env.DATABASE_URL);\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_1__.Pool({\n    connectionString: process.env.DATABASE_URL\n});\nconst db = (0,drizzle_orm_node_postgres__WEBPACK_IMPORTED_MODULE_2__.drizzle)(pool);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QixDQUFDLGlCQUFpQjtBQUNXO0FBQzFCO0FBRTFCRSxRQUFRQyxHQUFHLENBQUMsdUJBQXVCQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFM0QsTUFBTUMsT0FBTyxJQUFJTixvQ0FBSUEsQ0FBQztJQUNwQk8sa0JBQWtCSixRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDNUM7QUFFTyxNQUFNRyxLQUFLVCxrRUFBT0EsQ0FBQ08sTUFBTSIsInNvdXJjZXMiOlsiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2Uvc3RvcmUvbGliL2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG90ZW52L2NvbmZpZyc7IC8vVGhpcyBsb2FkcyAuZW52XG5pbXBvcnQgeyBkcml6emxlIH0gZnJvbSAnZHJpenpsZS1vcm0vbm9kZS1wb3N0Z3Jlcyc7XG5pbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnO1xuXG5jb25zb2xlLmxvZygnVXNpbmcgREFUQUJBU0VfVVJMOicsIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XG5cbmNvbnN0IHBvb2wgPSBuZXcgUG9vbCh7XG4gIGNvbm5lY3Rpb25TdHJpbmc6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGIgPSBkcml6emxlKHBvb2wpOyJdLCJuYW1lcyI6WyJkcml6emxlIiwiUG9vbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJkYiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/schema.js":
/*!***********************!*\
  !*** ./lib/schema.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   orders: () => (/* binding */ orders),\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/serial.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/numeric.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n\nconst products = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('products', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)('id').primaryKey(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('name').notNull(),\n    price: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.decimal)('price', {\n        precision: 10,\n        scale: 2\n    }).notNull(),\n    stock: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)('stock').notNull()\n});\nconst orders = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('orders', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)('id').primaryKey(),\n    submissionId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('submission_id').notNull(),\n    itemName: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('item_name').notNull(),\n    quantity: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)('quantity').notNull(),\n    deliveryName: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_name').notNull(),\n    deliveryContact: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_contact').notNull(),\n    deliveryAddress: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('delivery_address').notNull(),\n    status: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)('status').default('Pending'),\n    totalPrice: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.decimal)('totalPrice', {\n        precision: 10,\n        scale: 2\n    }).notNull().default('0.00')\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc2NoZW1hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEU7QUFFdkUsTUFBTUssV0FBV0wsNERBQU9BLENBQUMsWUFBWTtJQUMxQ00sSUFBSUwsMkRBQU1BLENBQUMsTUFBTU0sVUFBVTtJQUMzQkMsTUFBTU4seURBQUlBLENBQUMsUUFBUU8sT0FBTztJQUMxQkMsT0FBT1AsNERBQU9BLENBQUMsU0FBUztRQUFFUSxXQUFXO1FBQUlDLE9BQU87SUFBRSxHQUFHSCxPQUFPO0lBQzVESSxPQUFPVCw0REFBT0EsQ0FBQyxTQUFTSyxPQUFPO0FBQ2pDLEdBQUc7QUFFSSxNQUFNSyxTQUFTZCw0REFBT0EsQ0FBQyxVQUFVO0lBQ3RDTSxJQUFJTCwyREFBTUEsQ0FBQyxNQUFNTSxVQUFVO0lBQzNCUSxjQUFjYix5REFBSUEsQ0FBQyxpQkFBaUJPLE9BQU87SUFDM0NPLFVBQVVkLHlEQUFJQSxDQUFDLGFBQWFPLE9BQU87SUFDbkNRLFVBQVViLDREQUFPQSxDQUFDLFlBQVlLLE9BQU87SUFDckNTLGNBQWNoQix5REFBSUEsQ0FBQyxpQkFBaUJPLE9BQU87SUFDM0NVLGlCQUFpQmpCLHlEQUFJQSxDQUFDLG9CQUFvQk8sT0FBTztJQUNqRFcsaUJBQWlCbEIseURBQUlBLENBQUMsb0JBQW9CTyxPQUFPO0lBQ2pEWSxRQUFRbkIseURBQUlBLENBQUMsVUFBVW9CLE9BQU8sQ0FBQztJQUMvQkMsWUFBWXBCLDREQUFPQSxDQUFDLGNBQWM7UUFBRVEsV0FBVztRQUFJQyxPQUFPO0lBQUUsR0FBR0gsT0FBTyxHQUFHYSxPQUFPLENBQUM7QUFDbkYsR0FBRyIsInNvdXJjZXMiOlsiL1VzZXJzL21tZXRrYXIvcHJhY3RpY2Uvc3RvcmUvbGliL3NjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZ1RhYmxlLCBzZXJpYWwsIHRleHQsIGRlY2ltYWwsIGludGVnZXIgfSBmcm9tICdkcml6emxlLW9ybS9wZy1jb3JlJztcblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzID0gcGdUYWJsZSgncHJvZHVjdHMnLCB7XG4gIGlkOiBzZXJpYWwoJ2lkJykucHJpbWFyeUtleSgpLFxuICBuYW1lOiB0ZXh0KCduYW1lJykubm90TnVsbCgpLFxuICBwcmljZTogZGVjaW1hbCgncHJpY2UnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLm5vdE51bGwoKSwgLy8gRW5zdXJlIGRlY2ltYWwgdHlwZVxuICBzdG9jazogaW50ZWdlcignc3RvY2snKS5ub3ROdWxsKCksXG59KTtcblxuZXhwb3J0IGNvbnN0IG9yZGVycyA9IHBnVGFibGUoJ29yZGVycycsIHtcbiAgaWQ6IHNlcmlhbCgnaWQnKS5wcmltYXJ5S2V5KCksXG4gIHN1Ym1pc3Npb25JZDogdGV4dCgnc3VibWlzc2lvbl9pZCcpLm5vdE51bGwoKSxcbiAgaXRlbU5hbWU6IHRleHQoJ2l0ZW1fbmFtZScpLm5vdE51bGwoKSxcbiAgcXVhbnRpdHk6IGludGVnZXIoJ3F1YW50aXR5Jykubm90TnVsbCgpLFxuICBkZWxpdmVyeU5hbWU6IHRleHQoJ2RlbGl2ZXJ5X25hbWUnKS5ub3ROdWxsKCksXG4gIGRlbGl2ZXJ5Q29udGFjdDogdGV4dCgnZGVsaXZlcnlfY29udGFjdCcpLm5vdE51bGwoKSxcbiAgZGVsaXZlcnlBZGRyZXNzOiB0ZXh0KCdkZWxpdmVyeV9hZGRyZXNzJykubm90TnVsbCgpLFxuICBzdGF0dXM6IHRleHQoJ3N0YXR1cycpLmRlZmF1bHQoJ1BlbmRpbmcnKSxcbiAgdG90YWxQcmljZTogZGVjaW1hbCgndG90YWxQcmljZScsIHsgcHJlY2lzaW9uOiAxMCwgc2NhbGU6IDIgfSkubm90TnVsbCgpLmRlZmF1bHQoJzAuMDAnKSwgXG59KTtcblxuIl0sIm5hbWVzIjpbInBnVGFibGUiLCJzZXJpYWwiLCJ0ZXh0IiwiZGVjaW1hbCIsImludGVnZXIiLCJwcm9kdWN0cyIsImlkIiwicHJpbWFyeUtleSIsIm5hbWUiLCJub3ROdWxsIiwicHJpY2UiLCJwcmVjaXNpb24iLCJzY2FsZSIsInN0b2NrIiwib3JkZXJzIiwic3VibWlzc2lvbklkIiwiaXRlbU5hbWUiLCJxdWFudGl0eSIsImRlbGl2ZXJ5TmFtZSIsImRlbGl2ZXJ5Q29udGFjdCIsImRlbGl2ZXJ5QWRkcmVzcyIsInN0YXR1cyIsImRlZmF1bHQiLCJ0b3RhbFByaWNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/schema.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_mmetkar_practice_store_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/orders/route.js */ \"(rsc)/./app/api/orders/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_mmetkar_practice_store_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_mmetkar_practice_store_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/orders/route\",\n        pathname: \"/api/orders\",\n        filename: \"route\",\n        bundlePath: \"app/api/orders/route\"\n    },\n    resolvedPagePath: \"/Users/mmetkar/practice/store/app/api/orders/route.js\",\n    nextConfigOutput,\n    userland: _Users_mmetkar_practice_store_app_api_orders_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvcmRlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm9yZGVycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm9yZGVycyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1tZXRrYXIlMkZwcmFjdGljZSUyRnN0b3JlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1tZXRrYXIlMkZwcmFjdGljZSUyRnN0b3JlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNLO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRixxQyIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbW1ldGthci9wcmFjdGljZS9zdG9yZS9hcHAvYXBpL29yZGVycy9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvb3JkZXJzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvb3JkZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9vcmRlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvbW1ldGthci9wcmFjdGljZS9zdG9yZS9hcHAvYXBpL29yZGVycy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/drizzle-orm","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Forders%2Froute&page=%2Fapi%2Forders%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Forders%2Froute.js&appDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmmetkar%2Fpractice%2Fstore&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();