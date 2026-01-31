# API Specification v1.0

**Base URL:** `http://localhost:3000/api` (Dev)
**Authentication:** Bearer Token (JWT) required for protected endpoints.

---

## Courses 
*The core product: structured swimming blocks.*

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/courses` | **Public** | List all upcoming course blocks. |
| **GET** | `/courses/:id` | **Public** | Get details for a specific block. |
| **POST** | `/courses` | `ADMIN` | Create a new 6-week block. |
| **PATCH** | `/courses/:id` | `ADMIN` | Update time or instructor. |
| **DELETE** | `/courses/:id` | `ADMIN` | Soft delete a course. |

---

## Bookings
*Handling reservations and payments.*

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/bookings` | `PERSONAL` | Book a spot (Self or Dependent). |
| **GET** | `/bookings/my-bookings` | `PERSONAL` | View current and past bookings. |
| **DELETE** | `/bookings/:id` | `PERSONAL` | Cancel a booking (Refund logic applies). |

---

## Users & Auth
*Managing accounts for Personal users, Instructors, and Admins.*

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/users/register` | **Public** | Create a new Personal account. |
| **POST** | `/users/login` | **Public** | Exchange credentials for JWT. |
| **GET** | `/users/profile` | `Private` | Get current user details & credit balance. |
| **GET** | `/users/:id/swimmers` | `PERSONAL` | List swimmers managed by this account. |

---

## Status Codes
* **200 OK:** Success.
* **201 Created:** Resource successfully created.
* **400 Bad Request:** Missing fields or validation error.
* **401 Unauthorized:** Missing or invalid JWT.
* **403 Forbidden:** User does not have the required Role.
