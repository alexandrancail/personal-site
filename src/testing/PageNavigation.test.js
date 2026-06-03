import React from 'react';
import { pages } from "../app/Pages";

// Test that all items in pages data structure follows the correct 
// format
test("All elements in pages data structure are formatted appropriately.", () => {
    pages.forEach(page => {
        // Check that each page item contains the proper fields
        expect(page).toMatchObject({
            // Verify that name is a valid string of length of >=1
            "name": expect.stringMatching(/^.+$/i),
            // Verify that path is a string starting with a forward slash
            "path": expect.stringMatching(/^\/.*$/i),
            // Verify element is not null or undefined
            "element": expect.anything()
        });

        // Check that element is a valid React element
        expect(React.isValidElement(page["element"])).toBe(true);
    })
})

// Might need to use React Testing Library, as opposed to Jest,
// to test the following scenarios that require the firing of events

// TODO: Test that clicking on Home -> takes you to homepage
    // Test that "Home" link does not appear

// TODO: Test that clicking on About -> takes you to homepage
    // Test that "About" link is underlined