# DevDesk

DevDesk is a full-stack learning project built to teach modern web development from beginner React fundamentals through production deployment.

The finished product will be a small SaaS-style application combining ideas from Jira, Trello, a CRM, and a client portal.

The goal is not to rush to the finished product. Each stage introduces a new concept only after the previous stage is working.

---

## Core Stack

### Frontend
- React
- Vite
- JavaScript
- React Router
- CSS
- Tailwind CSS later in the project
- TanStack Query later in the project

### Backend
- Node.js
- Express

### Database
- PostgreSQL
- Prisma ORM

### Authentication
- JWT access tokens
- Refresh tokens
- HTTP-only cookies
- bcrypt

### Later Technologies
- Socket.IO / WebSockets
- Redis
- Cloudflare R2
- Vitest
- React Testing Library
- Supertest
- Playwright
- Docker
- GitHub Actions
- Cloudflare / production hosting

---

# Final Application

DevDesk will eventually include:

- Dashboard
- User accounts
- Clients
- Projects
- Tasks
- Kanban board
- Team members
- Role-based permissions
- Client portal
- Messages
- File uploads
- Notifications
- Search
- Invoices
- Activity history
- Testing
- Security
- Production deployment

Example application structure:

```text
DevDesk
├── Dashboard
├── Clients
├── Projects
├── Tasks
├── Team
├── Messages
├── Files
├── Invoices
├── Notifications
└── Settings
```

---

# Learning Roadmap

## Stage 1 — React Fundamentals

### Technologies
- React
- Vite
- JavaScript
- CSS

### Build
Create a basic task manager with no backend and no database.

A task should contain:

- Title
- Description
- Status
- Priority
- Due date

### Features
- [ ] Display a list of tasks
- [ ] Create reusable task components
- [ ] Create tasks
- [ ] Mark tasks complete
- [ ] Delete tasks
- [ ] Display task priority
- [ ] Display task status

### Concepts to Learn
- JSX
- Components
- Props
- `useState`
- Event handlers
- Conditional rendering
- Array `.map()`
- Controlled inputs
- Forms
- Lifting state

### Rule

All data may disappear when the browser refreshes.

That is intentional.

---

## Stage 2 — React Application Structure

### Technologies
- React
- React Router

### Features
- [ ] Task editing
- [ ] Task search
- [ ] Task filtering
- [ ] Task sorting
- [ ] Project list
- [ ] Project details page
- [ ] Navigation
- [ ] Not-found page

### Routes

```text
/
/dashboard
/projects
/projects/:id
/projects/:id/tasks
/settings
```

### Concepts to Learn
- React Router
- Dynamic routes
- URL parameters
- Query parameters
- `useEffect`
- `useMemo`
- Component composition
- Custom hooks
- Derived state
- Form validation

---

## Stage 3 — Browser Persistence

### Technologies
- localStorage
- Browser APIs

### Features
- [ ] Save tasks to localStorage
- [ ] Load tasks after refresh
- [ ] Save projects locally
- [ ] Build a reusable `useLocalStorage` hook

### Concepts to Learn
- `JSON.stringify()`
- `JSON.parse()`
- Browser storage
- Side effects
- `useEffect` dependencies
- Custom hooks

### Main Lesson

React state is not permanent storage.

---

## Stage 4 — First Backend

### Technologies
- Node.js
- Express
- REST
- Fetch API

### Features
- [ ] Create Express server
- [ ] Connect React frontend to backend
- [ ] Load tasks from the API
- [ ] Create tasks through the API
- [ ] Update tasks through the API
- [ ] Delete tasks through the API
- [ ] Add basic server-side validation

### API

```http
GET    /api/tasks
GET    /api/tasks/:id
POST   /api/tasks
PATCH  /api/tasks/:id
DELETE /api/tasks/:id
```

### Concepts to Learn
- HTTP
- REST
- GET
- POST
- PATCH
- DELETE
- Status codes
- Headers
- JSON
- Request body
- Route parameters
- Query parameters
- Express middleware
- CORS
- Async/await
- Client/server separation

---

## Stage 5 — PostgreSQL Database

### Technologies
- PostgreSQL
- SQL
- Prisma

### Tables
- users
- clients
- projects
- tasks

### Features
- [ ] Connect backend to PostgreSQL
- [ ] Store tasks permanently
- [ ] Create clients
- [ ] Create projects
- [ ] Assign tasks to projects
- [ ] Relate projects to clients
- [ ] Add migrations
- [ ] Add seed data

### Relationships

```text
Client
  └── Projects
       └── Tasks

User
  └── Assigned Tasks
```

### Concepts to Learn
- SELECT
- INSERT
- UPDATE
- DELETE
- JOIN
- Primary keys
- Foreign keys
- Constraints
- Indexes
- One-to-many relationships
- Many-to-many relationships
- Database normalization
- Migrations
- ORM basics

### Rule

Use Prisma, but learn the SQL concepts underneath it.

---

## Stage 6 — Authentication

### Technologies
- bcrypt
- JWT
- Cookies
- Express middleware

### Features
- [ ] Register
- [ ] Login
- [ ] Logout
- [ ] Password hashing
- [ ] Protected API routes
- [ ] Protected frontend routes
- [ ] Access tokens
- [ ] Refresh tokens
- [ ] HTTP-only cookies
- [ ] Current-user endpoint
- [ ] Forgot-password flow
- [ ] Password reset flow

### Concepts to Learn
- Authentication
- Password hashing
- JWT structure
- Access tokens
- Refresh tokens
- Cookies
- Sessions
- Authentication middleware
- Token expiration
- Secure credential storage

---

## Stage 7 — Authorization and Roles

### Roles
- Admin
- Manager
- Developer
- Client

### Features
- [ ] Add roles to users
- [ ] Admin can manage everything
- [ ] Manager can manage projects and tasks
- [ ] Developer can manage assigned work
- [ ] Client can view only their own projects
- [ ] Protect backend routes by permission
- [ ] Hide unavailable frontend actions

### Concepts to Learn
- Authentication vs authorization
- RBAC
- Ownership checks
- Permission middleware
- Least privilege
- Backend security boundaries

### Important Rule

Hiding a button in React is not security.

Permissions must be enforced by the backend.

---

## Stage 8 — Frontend Architecture

### Technologies
- React Context where appropriate
- TanStack Query

### Suggested Structure

```text
src/
├── api/
├── components/
├── features/
│   ├── auth/
│   ├── clients/
│   ├── projects/
│   └── tasks/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── utils/
└── App.jsx
```

### Features
- [ ] Refactor feature-specific code
- [ ] Create reusable UI components
- [ ] Create reusable API functions
- [ ] Add global authentication state
- [ ] Add loading states
- [ ] Add error states
- [ ] Introduce TanStack Query
- [ ] Add cache invalidation

### Concepts to Learn
- Separation of concerns
- Feature-based architecture
- Reusable components
- Custom hooks
- Global state
- Server state
- API abstraction
- Cache management
- Error boundaries

---

## Stage 9 — Kanban Board

### Technologies
- React
- Drag-and-drop library

### Columns
- Todo
- In Progress
- Review
- Done

### Features
- [ ] Display project tasks as columns
- [ ] Drag tasks between columns
- [ ] Save new status to backend
- [ ] Reorder tasks
- [ ] Optimistically update the UI
- [ ] Roll back failed changes

### Concepts to Learn
- Complex state
- Drag and drop
- Optimistic updates
- Synchronizing UI and backend
- Rollbacks
- Derived state

---

## Stage 10 — CRM Features

### Features
- [ ] Client list
- [ ] Client profile
- [ ] Contact details
- [ ] Client notes
- [ ] Client projects
- [ ] Client activity history
- [ ] Project status
- [ ] Project deadlines
- [ ] Assigned team members

### Concepts to Learn
- Relational data
- Nested resources
- Reusable forms
- CRUD architecture
- Data modeling

---

## Stage 11 — File Uploads

### Technologies
- multipart/form-data
- Cloudflare R2 or equivalent object storage

### Features
- [ ] Upload project files
- [ ] Upload client files
- [ ] Download files
- [ ] Delete files
- [ ] Restrict file access
- [ ] Validate file type
- [ ] Validate file size
- [ ] Show upload progress
- [ ] Generate secure download URLs

### Concepts to Learn
- File uploads
- MIME types
- Multipart requests
- Object storage
- Signed URLs
- File permissions
- Upload security

---

## Stage 12 — Real-Time Messaging

### Technologies
- WebSockets
- Socket.IO

### Features
- [ ] Project chat
- [ ] Live message updates
- [ ] Project-specific chat rooms
- [ ] Online/offline presence
- [ ] Typing indicator
- [ ] Store message history

### Concepts to Learn
- WebSockets
- Persistent connections
- Events
- Rooms
- Real-time state
- Connection lifecycle

---

## Stage 13 — Notifications

### Features
- [ ] Notification center
- [ ] Unread count
- [ ] Task assignment notifications
- [ ] Comment notifications
- [ ] Project update notifications
- [ ] Mark notification as read
- [ ] Mark all notifications as read

### Concepts to Learn
- Event-driven systems
- Notification state
- Database events
- Background work
- Read/unread state

---

## Stage 14 — Global Search

### Features
- [ ] Search clients
- [ ] Search projects
- [ ] Search tasks
- [ ] Search users
- [ ] Debounced search input
- [ ] Highlight matching results

### Technologies
- PostgreSQL search
- SQL `LIKE` / `ILIKE`
- Later: PostgreSQL full-text search

### Concepts to Learn
- Debouncing
- Search APIs
- Database querying
- Full-text search
- Query performance

---

## Stage 15 — Pagination and Large Datasets

### Features
- [ ] Paginate client lists
- [ ] Paginate projects
- [ ] Paginate tasks
- [ ] Add page-size controls
- [ ] Add API metadata
- [ ] Later implement cursor pagination

### Example

```http
GET /api/tasks?page=3&limit=25
```

### Concepts to Learn
- Offset pagination
- Cursor pagination
- Query limits
- API metadata
- Scalable data loading

---

## Stage 16 — Invoices

### Features
- [ ] Create invoices
- [ ] Add invoice items
- [ ] Calculate subtotal
- [ ] Calculate tax
- [ ] Mark invoice paid
- [ ] Associate invoice with client
- [ ] Associate invoice with project
- [ ] Invoice history

### Concepts to Learn
- Business logic
- Data validation
- Financial data modeling
- Derived values
- Transaction safety

---

## Stage 17 — Security

### Topics to Test
- SQL injection
- XSS
- CSRF
- IDOR
- Broken access control
- Brute-force login attempts
- Malicious file uploads
- JWT manipulation
- CORS misconfiguration

### Features
- [ ] Input validation
- [ ] Rate limiting
- [ ] Secure cookies
- [ ] Security headers
- [ ] Authorization checks
- [ ] Ownership checks
- [ ] File validation
- [ ] Login throttling
- [ ] Audit sensitive actions

### Concepts to Learn
- OWASP Top 10
- Secure coding
- Defense in depth
- Input validation
- Output encoding
- Broken access control
- IDOR
- CSRF protection
- XSS protection
- Rate limiting

### Security Exercise

Attempt to request another client's project by changing an ID in the URL.

The backend must reject access even if the resource exists.

---

## Stage 18 — Testing

### Technologies
- Vitest
- React Testing Library
- Supertest
- Playwright

### Features
- [ ] Unit tests
- [ ] React component tests
- [ ] API integration tests
- [ ] Authentication tests
- [ ] Authorization tests
- [ ] End-to-end tests

### Example E2E Flow

```text
Register
→ Login
→ Create Client
→ Create Project
→ Create Task
→ Move Task
→ Logout
```

### Concepts to Learn
- Unit testing
- Integration testing
- End-to-end testing
- Mocking
- Test isolation
- Assertions
- Test fixtures

---

## Stage 19 — Error Handling and Logging

### Features
- [ ] Central Express error middleware
- [ ] Standard API error format
- [ ] Frontend error messages
- [ ] Retry behavior
- [ ] 404 handling
- [ ] Server logging
- [ ] Request logging

### Example Error Format

```json
{
  "success": false,
  "error": {
    "code": "PROJECT_NOT_FOUND",
    "message": "Project does not exist"
  }
}
```

### Concepts to Learn
- Error middleware
- HTTP semantics
- Structured errors
- Logging
- Debugging
- Retry logic

---

## Stage 20 — Performance

### Test Data Goal

Generate enough fake data to expose bad architecture:

- 10,000 clients
- 100,000 projects
- 1,000,000 tasks

These numbers are for local performance testing, not a production requirement.

### Features
- [ ] Seed large datasets
- [ ] Measure slow API routes
- [ ] Inspect database queries
- [ ] Add indexes where justified
- [ ] Reduce unnecessary React renders
- [ ] Lazy-load routes
- [ ] Add code splitting
- [ ] Add caching

### Concepts to Learn
- Database indexes
- Query optimization
- N+1 queries
- React rendering
- Memoization
- Lazy loading
- Code splitting
- Caching
- Performance measurement

---

## Stage 21 — Redis and Background Work

### Technologies
- Redis

### Features
- [ ] Cache selected expensive data
- [ ] Store short-lived values
- [ ] Add background jobs
- [ ] Queue notifications or emails
- [ ] Understand cache invalidation

### Concepts to Learn
- Caching
- TTL
- Queues
- Background jobs
- Distributed state
- Cache invalidation

---

## Stage 22 — Docker

### Technologies
- Docker
- Docker Compose

### Services
- Frontend
- Backend
- PostgreSQL
- Redis

### Features
- [ ] Dockerize frontend
- [ ] Dockerize backend
- [ ] Run PostgreSQL in Docker
- [ ] Run Redis in Docker
- [ ] Persist database volumes
- [ ] Configure service networking
- [ ] Use environment variables

### Concepts to Learn
- Images
- Containers
- Volumes
- Networks
- Docker Compose
- Environment configuration
- Development vs production environments

---

## Stage 23 — CI/CD

### Technologies
- GitHub Actions

### Pipeline

```text
git push
   ↓
lint
   ↓
tests
   ↓
build
   ↓
deploy
```

### Features
- [ ] Run linting on push
- [ ] Run tests on push
- [ ] Build frontend
- [ ] Build backend
- [ ] Prevent deployment when tests fail
- [ ] Deploy automatically after successful checks

### Concepts to Learn
- CI
- CD
- Build pipelines
- Automated quality gates
- Deployment automation

---

## Stage 24 — Production Deployment

### Possible Infrastructure

```text
Frontend
Cloudflare Pages

Backend
Cloudflare / Railway / Render / VPS

Database
Managed PostgreSQL

File Storage
Cloudflare R2
```

### Features
- [ ] Production frontend
- [ ] Production API
- [ ] Production database
- [ ] Production file storage
- [ ] Environment variables
- [ ] HTTPS
- [ ] Custom domain
- [ ] Logging
- [ ] Monitoring
- [ ] Database backups

### Concepts to Learn
- Production configuration
- HTTPS
- DNS
- Environment variables
- Deployment
- Monitoring
- Backups
- Production debugging

---

# Optional Advanced Stages

After the core project is complete:

- [ ] TypeScript migration
- [ ] Email notifications
- [ ] OAuth / Google login
- [ ] Two-factor authentication
- [ ] Audit logs
- [ ] Project comments
- [ ] Mentions
- [ ] Email invitations
- [ ] PDF invoice generation
- [ ] Analytics dashboard
- [ ] Dark mode
- [ ] Accessibility audit
- [ ] PWA support
- [ ] Internationalization
- [ ] API documentation with OpenAPI / Swagger
- [ ] Database transactions
- [ ] Webhooks
- [ ] Multi-tenant organizations
- [ ] Subscription billing
- [ ] Feature flags

---

# Learning Rules

This repository is primarily a learning project.

1. Build each stage before moving to the next.
2. Do not add a technology before there is a problem that justifies it.
3. Understand the code before accepting generated code.
4. Keep frontend, backend, and database responsibilities separate.
5. Security must be enforced on the server.
6. Test important behavior, not implementation details.
7. Refactor when complexity becomes visible instead of trying to design everything perfectly on day one.
8. Commit frequently with meaningful commit messages.
9. Break large features into small tasks.
10. If something works but you cannot explain why, it is not finished from a learning perspective.

---

# Recommended Workflow

For each stage:

1. Read the requirements.
2. Break the stage into small tasks.
3. Implement one task yourself.
4. Run and test it.
5. Review the code.
6. Fix problems.
7. Commit the change.
8. Move to the next task.

The objective is to progress from basic React development to being able to design, build, secure, test, deploy, and maintain a complete full-stack application.
