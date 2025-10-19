CREATE TYPE "public"."link_state" AS ENUM('pending', 'cancelled', 'accepted', 'rejected', 'removed');--> statement-breakpoint
ALTER TABLE "instructor_students" ADD COLUMN "link_state" "link_state" DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE "instructor_students" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "instructor_students" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;