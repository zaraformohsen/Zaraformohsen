
function speak() {
    const utterance = new SpeechSynthesisUtterance("سلام محسن عزیز، زارا همیشه پیشته!");
    utterance.lang = "fa-IR";
    speechSynthesis.speak(utterance);
}
