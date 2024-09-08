// test/specs/morosystems-test.ts
import GooglePage from '../pages/google.page';
import MoroSystemsPage from '../pages/morosystems.page';
import { expect } from 'chai';

describe('Google Search for MoroSystems and Kariéra Page Test', () => {

    before(async () => {
        await GooglePage.open();
        await GooglePage.acceptCookies(); // Accept cookies if needed
    });

    it('should open Google, search for MoroSystems, click the link, navigate to Kariéra page, and check for main element', async () => {
        // Search for MoroSystems
        await GooglePage.search('MoroSystems');

        // Click the MoroSystems link from the search results
        await GooglePage.clickOnMoroSystemsLink();

        // Navigate to the Kariéra page by first hovering over 'O nás'
        await MoroSystemsPage.goToCareerPage();

        // Verify the main element is present
        const isMainDisplayed = await MoroSystemsPage.isMainElementDisplayed();
        expect(isMainDisplayed).to.be.true;
    });
});
