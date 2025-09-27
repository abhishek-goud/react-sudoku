# react-sudoku - Gemini AI Assistant Configuration

## Project Context
- **Name**: react-sudoku
- **Category**: Web Development
- **Difficulty**: intermediate
- **Tech Stack**: React, Javascript

## Project Type Detection
**CRITICAL**: Before implementing any code changes, you MUST:
1. Analyze the project structure to identify the programming language
2. Look for key indicator files:
   - `package.json` → Node.js/JavaScript project
   - `requirements.txt`, `setup.py`, `pyproject.toml` → Python project
   - `pom.xml` → Java Maven project
   - `build.gradle` → Java Gradle project
   - `Cargo.toml` → Rust project
   - `go.mod` → Go project
3. Adapt your implementation approach based on the detected language
4. Use appropriate file extensions and naming conventions

## Code Generation Rules

### General Guidelines
1. Follow the existing code style and patterns in the project
2. Maintain backward compatibility unless explicitly refactoring
3. Add proper error handling and input validation
4. Include comprehensive comments for complex logic
5. Follow security best practices
6. Write testable code with clear separation of concerns
7. **ALWAYS detect project type first before implementing**

### Language-Specific Implementation Rules
- Follow general best practices for the detected programming language

### Technology-Specific Rules

#### React/Next.js Rules
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices for state management
- Use TypeScript for type safety
- Implement proper prop validation


### File Operations
- Always backup files before modifying them
- Preserve existing imports and dependencies
- Maintain proper file structure and organization
- Follow naming conventions used in the project
- Use correct file extensions for the detected language

### Security Guidelines
- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper authentication and authorization
- Avoid hardcoding sensitive information
- Follow OWASP security guidelines

### Testing Requirements
- Write unit tests for new functions using the appropriate testing framework
- Include integration tests for API endpoints
- Ensure edge cases are covered
- Maintain test coverage above 80%
- Use language-specific testing tools (Jest for JS, pytest for Python, etc.)

### AI Analysis Context

### Current Project Analysis
- **Overall Score**: 72/100
- **Code Quality**: 75/100
- **Security**: 65/100
- **Performance**: 80/100
- **Maintainability**: 70/100

### Key Recommendations
- Implement proper TypeScript integration for better type safety and code reliability
- Add comprehensive unit tests and integration tests for core functionality
- Implement proper error boundaries for React components
- Add JSDoc documentation for key functions and components
- Implement input validation and sanitization for user inputs in the Sudoku grid

### Areas for Improvement
- Missing proper error handling in several components
- Lack of comprehensive documentation for functions and components
- No type definitions or TypeScript implementation
- Limited test coverage for core functionality
- Some hardcoded values could be moved to configuration files

### Project Strengths
- Clean project structure with clear separation of concerns
- Modern React hooks usage with useState for state management
- Good use of component composition and reusability
- Efficient grid manipulation algorithms
- Integration of modern UI components with Radix UI


## Automation Rules
- **Non-interactive mode**: Always enabled for automated code generation
- **File writes**: Pre-authorized for this project
- **File operations**: Use file_editor tool instead of shell commands
- **Code analysis**: Use built-in analysis tools
- **Validation**: Focus on code quality over external tool execution
- **Project detection**: Always detect project type before validation

## Tool Configuration
- **Preferred tools**: file_editor, code_analysis, text_processing
- **Avoid tools**: run_shell_command, terminal, system_commands
- **File handling**: Direct file editing preferred over command-line operations

## Implementation Priorities
1. Project type detection (CRITICAL - must be done first)
2. Security fixes (High priority)
3. Error handling improvements (High priority)
4. Performance optimizations (Medium priority)
5. Code quality improvements (Medium priority)
6. Feature enhancements (Low priority)
