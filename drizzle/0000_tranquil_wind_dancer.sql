CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"submission_id" text NOT NULL,
	"item_name" text NOT NULL,
	"quantity" integer NOT NULL,
	"delivery_name" text NOT NULL,
	"delivery_contact" text NOT NULL,
	"delivery_address" text NOT NULL,
	"status" text DEFAULT 'Pending'
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"stock" integer NOT NULL
);
