## Project Overview
- Java 17 / Spring Boot 2.7.x
- Gradle 8.2.1
- REST API backend
- Database: MySQL
- Persistence: Spring Data JPA / Hibernate
- Package structure follows Controller → Service → Repository.

## Build and Test comments
- Build: `./gradlew build`
- Run tests: `./gradlew test`
- Run application: `./gradlew bootRun`
- Clean build: `./gradlew clean build`

## Code Conventions
- Follow standard Java and Spring Boot conventions.
- Use 4 spaces for indentation. Do not use tabs.
- Use `PascalCase` for class and interface names.
- Use `camelCase` for methods, variables, and fields.
- Use `UPPER_SNAKE_CASE` for constants.
- Keep methods small and focused on a single responsibility.
- Prefer constructor injection over field injection.
- Do not use `@Autowired` field injection.
- Use Lombok only if it is already used in the project.
- Follow the existing package structure and naming conventions.
- Do not introduce new libraries or frameworks unless necessary.
- Prefer existing utilities and common components over duplicating logic.
- Handle exceptions explicitly and use the project's existing exception-handling pattern.
- Add or update tests when changing business logic.
- Do not modify unrelated code.

## Commit Rules
- Follow the Conventional Commits format.
- Write commit descriptions in Korean.
- Format : `<type>: <description>`
- Write concise and descriptive commit messages.
- Use the following types:
  - `feat`: Add a new feature
  - `fix`: Fix a bug
  - `refactor`: Refactor code without changing behavior
  - `test`: Add or modify tests
  - `docs`: Documentation changes
  - `style`: Formatting or style changes
  - `chore`: Build, configuration, or maintenance changes
- Keep each commit focused on a single logical change.
