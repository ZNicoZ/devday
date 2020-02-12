(async () => { 
    const testCase = new TestCase("Consol DE and Sakuli Contact"); 
    const screen = new Region();
    const env = new Environment();
    env.setSimilarity(0.82);
    try {
        async function highlightClick (element){
            await _highlight(element);
            await _click(element);
        }
        await _navigateTo("https://consol.de");
        let navEl = _listItem("nav-item dropdown nav-item-201");
        await highlightClick(navEl);
        await highlightClick(_listItem(0, _in(navEl)));
        await _highlight(_byXPath('//img[@title="Sakuli"]'));
        await _highlight(_heading2(/Zur Sakuli Produktseite/));
        await _highlight(_div("card card-type1[0]"));
        await _highlight(_div("card card-type1[1]"));
        await _highlight(_div("card card-type1[2]"));
        await _highlight(_heading3("10-Schritte-Guide für End-to-End-Monitoring"));

        await _navigateTo("https://sakuli.io/wp");

        await _wait(3000, ()=>_isVisible(_button("I agree")));
        await highlightClick(_button("I agree"));
        await highlightClick(_link(/Contact/));
        await _setSelected(_select("powermail_field_salutation"), "Mrs.");
        await _setValue(_textbox("powermail_field_firstname"), "Henriette");
        await _setValue(_textbox("powermail_field_name"), "Kette");
        

        await _setValue(_emailbox("powermail_field_email"), "h.kette@thisIsNotADomain.wuxi");
        await _focus(_textbox("powermail_field_phone"));
        await env.type("089 / 3993 555 98112");

        
        await _setValue(_textbox("powermail_field_company"), "Consol GmbH");
        await _setValue(_textarea("powermail_field_mitteilung"), "Hallo, ich würde gerne mehr über Ihr Produkt erfahren, bitte kontaktieren Sie mich. H.Kette");

        await _check(_checkbox("powermail_field_datenschutz_1"));
        await _highlight(_button("Send"));
        await _click(_button("× Close"));

        await _wait(4000);

    } catch (e) {
        await testCase.handleException(e); 
    } finally {
        await testCase.saveResult(); 
    }
})(); 