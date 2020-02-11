
(async () => {
    const testCase = new TestCase("Memes");
    const screen = new Region();
    const env = new Environment();
    const max = 20000;
    const url = "https://imgflip.com/memegenerator/74454246/Beach-Testing-3";

    async function waitForElement(element, timeout) {
        await _wait(timeout, () => _isVisible(element));
    }

    async function createMeme(top, bottom) {
        await waitForElement(_textarea("mm-text"), max);

        const textFields = await _collect("_textarea", "mm-text");
        await _setValue(textFields[0], top);
        await _setValue(textFields[1], bottom);

        await _click(_div("Generate"));
        await testCase.endOfStep("Created Meme " + top + " " + bottom);

        await waitForElement(_textbox("img-code link"), max);
        await _highlight(_textbox("img-code link"), 200);
        env.setClipboard(await _getValue(_textbox("img-code link")));

    }
    async function saveMemeUrl() {
        let editorButtonReg
        let editorReg
        let chromeButtonReg
        editorButtonReg = await screen.find("textmate.png");
        await _wait(max, () => editorButtonReg.click());
        editorReg = env.getRegionFromFocusedWindow();
        await _wait(max, () => editorReg.move(20, 5).click());
        await env.keyDown(Key.CMD, Key.DOWN);
        await env.keyUp(Key.CMD, Key.DOWN);
        await env.keyDown(Key.CMD, Key.DOWN);
        await env.keyUp(Key.CMD, Key.DOWN);
        await env.type(Key.ENTER);

        await env.pasteClipboard();
        await testCase.endOfStep("Saved Meme Link");

        chromeButtonReg = screen.find("chrome.png");
        await _wait(max, () => chromeButtonReg.mouseMove().click());
        await _wait(300);

        await _click(_div("Make another"));

    }
    try {
        await _navigateTo(url);
        await testCase.endOfStep("Navigate to url");
        env.setSimilarity(0.82);

        await createMeme("My Girlfriend", "Doing HomeOffice");
        await saveMemeUrl();
        await createMeme("Simon", "Developing Sakuli");
        await saveMemeUrl();
        await createMeme("DevDay", "at consol");
        await saveMemeUrl();


        await _wait(2000);

    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})(); 


