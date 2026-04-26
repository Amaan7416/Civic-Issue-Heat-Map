# CivicSense

CivicSense is a Spring Boot civic reporting platform for Indian cities. Citizens can submit issues with a photo, category, city, area, and exact map location. Admins can log in, filter complaints by category, city, area, and status, and update resolution progress.

## Stack

- Backend: Spring Boot 3, Spring Security, JPA
- Frontend: HTML, CSS, JavaScript
- Maps: Leaflet + Leaflet Heat
- Database: H2 by default, MySQL optional

## Main Features

- Citizen homepage with simple animations and clear calls to action
- Complaint form with:
  - issue category
  - city and area
  - address and description
  - photo upload
  - GPS capture or manual map pin location
- Interactive heatmap showing complaint density
- Department routing based on issue category
- Admin login with JWT
- Admin dashboard filters for category, city, area, and status
- Admin status updates secured on the backend

## Run

1. Open `backend/` as the Spring Boot project.
2. Run `com.civicvoice.CivicVoiceApplication`.
3. Open [http://localhost:8080](http://localhost:8080).

## Pages

- `/` - citizen homepage, report form, and public heatmap
- `/admin.html` - admin login and dashboard

## Demo Credentials

- Username: `admin`
- Password: `admin123`

## Database

Default setup uses H2 in-memory database and sample civic issues are seeded automatically.

To switch to MySQL, update `backend/src/main/resources/application.properties`:

```properties
# spring.datasource.url=jdbc:mysql://localhost:3306/civicsense?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
# spring.datasource.username=root
# spring.datasource.password=root
# spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# spring.jpa.hibernate.ddl-auto=update
```

## Notes

- The Spring Boot app is the official implementation.
- The older root-level static files and React frontend are legacy work and are not required for the final demo flow.
