/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-undef

marked.setOptions({
    breaks: true,
    gfm: true,
  });

class MarkupInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        input: defaultText
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
        input: event.target.value
        })
    }

    render() {
        return (
        <div className="container-fluid" id="primary">
            <div className="card bg-success mx-auto" id="editor-box">
                <div className="card-header">Editor</div>
                <textarea className="card-body" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
            </div>
            <br />
            <div className="card bg-warning mx-auto" id="preview-box">
                <div className="card-header">Previewer</div>
                <div className="card-body" id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input, { renderer: renderer })}} />
            </div>
        </div>
        );
    }
}

const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};




const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, `+'`<div></div>`'+`, between 2 backticks.

`+"```"+`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == `+"'```'"+" && lastLine == '```'"+`) {
    return multiLineCode;
  }
}
`+"```"+`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

// eslint-disable-next-line no-undef
ReactDOM.render(<MarkupInput />, document.getElementById('react'))