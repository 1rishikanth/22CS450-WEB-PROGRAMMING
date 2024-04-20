package Experiment9.JDBCDROPDOWN.src;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class App {

    // JDBC URL, username, and password of MySQL server
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/VRD";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "rishi@09";

    // Query to fetch data for dropdown
    private static final String QUERY = "SELECT id, name FROM dropdown_data";

    // Method to fetch dropdown data from database
    public List<String> fetchDropdownData() {
        List<String> dropdownData = new ArrayList<>();

        try (Connection connection = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD);
                PreparedStatement preparedStatement = connection.prepareStatement(QUERY);
                ResultSet resultSet = preparedStatement.executeQuery()) {

            while (resultSet.next()) {
                String name = resultSet.getString("name");
                dropdownData.add(name);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle the exception properly
        }

        return dropdownData;
    }

    public static void main(String[] args) {
        App dataFetcher = new App();
        List<String> dropdownData = dataFetcher.fetchDropdownData();

        // Assuming you have a dropdown component in your UI
        for (String item : dropdownData) {
            System.out.println(item);
            // You can add this item to your dropdown in your UI
        }
    }
}