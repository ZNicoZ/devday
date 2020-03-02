
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
        await _highlight(textFields[0], 500);
        await _setValue(textFields[0], top);
        await _highlight(textFields[1], 500);
        await _setValue(textFields[1], bottom);
        await _click(_div("Generate"));
        await testCase.endOfStep("Created Meme " + top + " " + bottom);
        await waitForElement(_textbox("img-code link"), max);
        await _highlight(_textbox("img-code link"), 500);
        env.setClipboard(await _getValue(_textbox("img-code link")));
    }
    async function saveMemeUrl() {
        let editorButtonReg
        let editorReg
        let chromeButtonReg
        editorButtonReg = await screen.find("textmate.png");
        await _wait(max, () => editorButtonReg.click());
        
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


        await _highlight(_div("Make another"));
        await _click(_div("Make another"));

    }
    try {
        await _navigateTo(url);
        await _highlight(_heading1(/.*/));
        await testCase.endOfStep("Navigate to url");
        env.setSimilarity(0.82);

        await createMeme("Simon", "Developing Sakuli");
        await saveMemeUrl();
        await createMeme("Sakuli", "Doing the Work");
        await saveMemeUrl();
        await createMeme("Selling Sakuli", "Be Like");
        await saveMemeUrl();

    } catch (e) {
        await testCase.handleException(e);
    } finally {
        await testCase.saveResult();
    }
})(); 


