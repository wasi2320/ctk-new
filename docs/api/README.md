# API Documentation

This document provides detailed information about all API endpoints in the CTK New application.

## 🔐 Authentication

All API endpoints require proper authentication. The application uses Supabase for authentication.

### Headers

```http
Authorization: Bearer <access_token>
Content-Type: application/json
```

## 📝 Blog Endpoints

### GET /api/blogs

Fetch all blog posts with category information.

**Response:**

```json
{
  "blogs": [
    {
      "id": "uuid",
      "title": "Blog Title",
      "excerpt": "Blog excerpt...",
      "content": "Markdown content...",
      "poster_url": "https://...",
      "author_id": "uuid",
      "category_id": "uuid",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z",
      "categories": {
        "name": "Category Name"
      }
    }
  ]
}
```

### POST /api/blogs

Create a new blog post.

**Request Body:**

```json
{
  "title": "Blog Title",
  "excerpt": "Blog excerpt",
  "content": "Markdown content",
  "poster_url": "https://...",
  "author_id": "uuid",
  "category_id": "uuid (optional)"
}
```

**Response:**

```json
{
  "blog": {
    "id": "uuid",
    "title": "Blog Title",
    "excerpt": "Blog excerpt",
    "content": "Markdown content",
    "poster_url": "https://...",
    "author_id": "uuid",
    "category_id": "uuid",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z",
    "categories": {
      "name": "Category Name"
    }
  }
}
```

### PUT /api/blogs

Update an existing blog post.

**Request Body:**

```json
{
  "id": "uuid",
  "title": "Updated Title",
  "excerpt": "Updated excerpt",
  "content": "Updated content",
  "poster_url": "https://...",
  "category_id": "uuid (optional)"
}
```

**Response:**

```json
{
  "blog": {
    "id": "uuid",
    "title": "Updated Title",
    "excerpt": "Updated excerpt",
    "content": "Updated content",
    "poster_url": "https://...",
    "category_id": "uuid",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z",
    "categories": {
      "name": "Category Name"
    }
  }
}
```

### DELETE /api/blogs?id={id}

Delete a blog post by ID.

**Response:**

```json
{
  "message": "Blog deleted successfully"
}
```

## 🏷️ Category Endpoints

### GET /api/categories

Fetch all categories.

**Response:**

```json
{
  "categories": [
    {
      "id": "uuid",
      "name": "Category Name",
      "description": "Category description",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### POST /api/categories

Create a new category.

**Request Body:**

```json
{
  "name": "Category Name",
  "description": "Category description (optional)"
}
```

**Response:**

```json
{
  "category": {
    "id": "uuid",
    "name": "Category Name",
    "description": "Category description",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

**Error Response (409 Conflict):**

```json
{
  "error": "Category already exists"
}
```

### PUT /api/categories

Update an existing category.

**Request Body:**

```json
{
  "id": "uuid",
  "name": "Updated Category Name",
  "description": "Updated description"
}
```

**Response:**

```json
{
  "category": {
    "id": "uuid",
    "name": "Updated Category Name",
    "description": "Updated description",
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

### DELETE /api/categories?id={id}

Delete a category by ID.

**Response:**

```json
{
  "message": "Category deleted successfully"
}
```

**Error Response (400 Bad Request):**

```json
{
  "error": "Cannot delete category that is being used by blogs"
}
```

## 💬 Chat Endpoints

### POST /api/chat

Send a chat message (if implemented).

**Request Body:**

```json
{
  "message": "User message",
  "context": "Additional context"
}
```

## 📊 Error Handling

All endpoints return appropriate HTTP status codes:

- **200** - Success
- **201** - Created
- **400** - Bad Request
- **401** - Unauthorized
- **403** - Forbidden
- **404** - Not Found
- **409** - Conflict
- **500** - Internal Server Error

### Error Response Format

```json
{
  "error": "Error message description"
}
```

## 🔒 Security

- All endpoints implement Row Level Security (RLS)
- Authentication is required for write operations
- Input validation is performed on all requests
- SQL injection protection via parameterized queries

## 📈 Rate Limiting

Currently, no rate limiting is implemented. Consider implementing rate limiting for production use.

## 🧪 Testing

Test the API endpoints using tools like:

- Postman
- Insomnia
- cURL
- Thunder Client (VS Code extension)

## 📝 Examples

### cURL Examples

**Get all blogs:**

```bash
curl -X GET "http://localhost:3000/api/blogs" \
  -H "Content-Type: application/json"
```

**Create a category:**

```bash
curl -X POST "http://localhost:3000/api/categories" \
  -H "Content-Type: application/json" \
  -d '{"name": "Technology", "description": "Tech-related content"}'
```

**Update a blog:**

```bash
curl -X PUT "http://localhost:3000/api/blogs" \
  -H "Content-Type: application/json" \
  -d '{"id": "uuid", "title": "Updated Title", "content": "Updated content"}'
```

---

_Last updated: ${new Date().toLocaleDateString()}_
