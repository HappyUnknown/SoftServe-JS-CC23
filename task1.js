class MapElement
{
    key;
    value;
    constructor(k, v)
    {
        this.key = k;
        this.value = v;
    }
}
class CssClass
{
    name;
    styles = [];
    currentStyleI;
    addStyle(styleName, styleVal)
    {
        this.styles.push(new MapElement(styleName, styleVal)); //Class constructor MapElement cannot be invoked without 'new'
    }
    popStyle(styleName)
    {
        nextArr = []
        for(let i=0;i<this.styles.length;i++)
        {
            if(this.styles[i].key != styleName)
            {
                nextArr.push(this.styles[i]);
            }
            this.styles = nextArr;
        }
    }
    setStyle(styleName)
    {
        for(let i=0;i<this.styles.length;i++)
        {
            if(this.styles[i].key == styleName)
            {
                this.currentStyleI = i;
                return;
            }
        }
        alert(`No style on name ${styleName}`);
    }
    getCSS()
    {
        if(this.currentStyleI < this.styles.length)
            return `${this.styles[this.currentStyleI].key}: ${this.styles[this.currentStyleI].value};`;
        return undefined;
    }
}

css = new CssClass();
css.addStyle('KEY', 'VALUE');
css.setStyle('VALUE');
alert(`${css.getCSS()}`);