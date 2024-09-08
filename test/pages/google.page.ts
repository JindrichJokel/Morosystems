// test/pages/google.page.ts
class GooglePage {
    get searchInput() {
        return $('textarea[id="APjFqb"]');
    }

    get searchResults() {
        return $$('a[href^="https://www.morosystems.cz"]'); // This will target the MoroSystems URL in the search results
    }

    async search(term: string) {
        await this.searchInput.setValue(term);
        await browser.keys('Enter'); // Simulate hitting Enter
    }

    async clickOnMoroSystemsLink() {
        // Wait for the search results to appear
        await browser.waitUntil(async () => (await this.searchResults.length) > 0, {
            timeout: 10000, 
            timeoutMsg: 'MoroSystems link not found in search results'
        });

        // Click the first MoroSystems result
        await this.searchResults[0].click();
    }

    async acceptCookies() {
        const cookieButton = await $('#L2AGLb');
        if (await cookieButton.isDisplayed()) {
            await cookieButton.click();
        }
    }

    async open() {
        await browser.url('https://www.google.com');
    }
}

export default new GooglePage();
