class Button
{
    width;
    height;
    text;
    constructor(width, height, text)
    {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    getUICode()
    {
        return `<button id="btnTask2El" style="width:${this.width}; height: ${this.height}; text: ${this.text}">Width: ${this.width}\nHeight: ${this.height}\nText: ${this.text}</button>`;
    }
    showBTN()
    {
        document.write(this.getUICode());
    }
}
class BootstrapButton extends Button
{
    color;
    constructor(width, height, text, color)
    {
        super(width, height, text);
        this.color = color
    }
    showBTN()
    {
        document.write(super.getUICode().replace('style="', `style="background-color: ${this.color};`));
    }
}

btn = new BootstrapButton(100, 100, "TEXT", "teal");
btn.showBTN();