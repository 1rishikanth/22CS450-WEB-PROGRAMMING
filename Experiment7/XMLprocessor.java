package Experiment7;

import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.*;

public class XMLprocessor {
    public static void main(String[] args) {
        String xmlFile = "Example.xml"; // Replace with the path to your XML file
        processXMLFile(xmlFile);
    }

    public static void processXMLFile(String xmlFile) {
        try {

            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();

            // Parse the XML file
            Document doc = builder.parse(new File(xmlFile));

            // Normalize the document
            doc.getDocumentElement().normalize();

            // Get the root element
            Element root = doc.getDocumentElement();

            // Process the root element
            processElement(root, 0);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void processElement(Element element, int indent) {
        // Print the element name
        System.out.println("  ".repeat(indent) + "Element: " + element.getTagName());

        // Process attributes
        NamedNodeMap attributes = element.getAttributes();
        if (attributes.getLength() > 0) {
            System.out.println("  ".repeat(indent + 1) + "Attributes:");
            for (int i = 0; i < attributes.getLength(); i++) {
                Node attr = attributes.item(i);
                System.out.println("  ".repeat(indent + 2) + attr.getNodeName() + ": " + attr.getNodeValue());
            }
        }

        // Process child elements recursively
        NodeList children = element.getChildNodes();
        for (int i = 0; i < children.getLength(); i++) {
            Node node = children.item(i);
            if (node.getNodeType() == Node.ELEMENT_NODE) {
                processElement((Element) node, indent + 1);
            }
        }
    }
}
