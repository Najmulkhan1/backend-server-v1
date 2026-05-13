# Database Management Systems (DBMS) Fundamentals

**Diagram Link:** [View Database Concepts Diagram](https://drive.google.com/file/d/1sbPJTu38UQ3GpyHEJW4Sd29zfvNcKZWc/view?usp=sharing)

This document provides a comprehensive overview of essential database concepts, ranging from basic key definitions to advanced scaling techniques.

---

## 1. Primary Key vs. Foreign Key
* **Primary Key (PK):** A unique identifier for a record in a table. It cannot contain `NULL` values and must be unique across all rows. Each table can have only one primary key.
* **Foreign Key (FK):** A field in one table that refers to the Primary Key of another table. It establishes a link between the two tables, ensuring **referential integrity**. Unlike a PK, a foreign key can contain duplicate values or `NULL`s.

## 2. Why is Normalization Important?
Normalization is the process of organizing data in a database to:
* **Reduce Redundancy:** Prevents storing the same information in multiple places.
* **Maintain Data Integrity:** Ensures that data is logically stored.
* **Prevent Anomalies:** Avoids issues during insertion, updating, or deletion (e.g., deleting a customer shouldn't accidentally delete their entire order history if stored incorrectly).

## 3. What is a JOIN?
A `JOIN` clause is used to combine rows from two or more tables based on a related column between them.
* **Inner Join:** Returns records that have matching values in both tables.
* **Left Join:** Returns all records from the left table and matched records from the right.
* **Right Join:** Returns all records from the right table and matched records from the left.
* **Full Join:** Returns all records when there is a match in either table.

## 4. SQL vs. MongoDB
| Feature | SQL (Relational) | MongoDB (NoSQL) |
| :--- | :--- | :--- |
| **Structure** | Table-based (Rows/Columns) | Document-based (JSON/BSON) |
| **Schema** | Fixed/Predefined | Dynamic/Schema-less |
| **Scaling** | Vertically (Upgrading hardware) | Horizontally (Adding more servers) |
| **Best For** | Complex queries & transactions | Rapid development & big data |

## 5. What is a Composite Key?
A **Composite Key** is a primary key that consists of two or more columns. It is used when a single column is not enough to uniquely identify a row, but the combination of multiple columns is. For example, in a `Student_Course` table, the combination of `Student_ID` and `Course_ID` would be a composite key.

## 6. What is a Weak Entity?
A **Weak Entity** is an entity that cannot be uniquely identified by its own attributes alone. It depends on a **Strong Entity** (owner entity) for its existence.
* *Example:* A "Dependent" in an insurance database is a weak entity because it cannot exist without the "Employee" (the policyholder).

## 7. Why do we use Constraints?
Constraints are rules applied to table columns to limit the type of data that can go into them. This ensures the **accuracy and reliability** of the data.
* `NOT NULL`: Ensures a column cannot have a NULL value.
* `UNIQUE`: Ensures all values in a column are different.
* `CHECK`: Ensures that the values satisfy a specific condition.

## 8. Many-to-Many Relationship
A Many-to-Many ($M:N$) relationship occurs when multiple records in one table are associated with multiple records in another.
* *Example:* Students and Courses. One student can enroll in many courses, and one course can have many students.
* **Implementation:** Relational databases require a **junction table** (mapping table) containing foreign keys from both related tables.

## 9. Clustered vs. Non-Clustered Index
* **Clustered Index:** Determines the physical order of data in a table. There can only be **one** per table (usually the Primary Key).
* **Non-Clustered Index:** A separate structure that contains pointers to the actual data. You can have multiple non-clustered indexes on a table.

## 10. Database Sharding vs. Partitioning
### Partitioning
Splits a large table into smaller, more manageable pieces within a **single** database instance.
* **When to use:** When a table has millions of rows and you need to speed up queries by scanning specific ranges.

### Sharding
A type of horizontal partitioning that distributes data across **multiple** separate database servers.
* **When to use:** When your dataset is too large for a single machine or your traffic exceeds the capacity of one server.