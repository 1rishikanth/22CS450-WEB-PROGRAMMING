package Experiment8.JDBC;

import java.sql.*;

public class JDBCExample {
    private static final String URL = extracted();

    private static String extracted() {
        return "jdbc:mysql://localhost:3306/spring_trail";
    }

    private static final String USER = "root";
    private static final String PASSWORD = "rishi@09";

    public static void main(String[] args) {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;

        try {
            // Establishing connection
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Connected to the database!");

            // Creating a statement
            statement = connection.createStatement();

            // Executing a query
            resultSet = statement.executeQuery("SELECT * FROM mytable");

            // Processing the result set
            while (resultSet.next()) {
                System.out.println(resultSet.getInt("id") + "\t" + resultSet.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Closing resources
            try {
                if (resultSet != null)
                    resultSet.close();
                if (statement != null)
                    statement.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
