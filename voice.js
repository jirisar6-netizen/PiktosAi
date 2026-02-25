export const voiceEngine = {
    speak(text) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'cs-CZ';
        msg.pitch = 1.2;
        msg.rate = 0.9;
        window.speechSynthesis.speak(msg);
    }
};

