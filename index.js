import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;
function reverseSentence(sentence) {
    // Reverse the sentence
    let reversedSentence = sentence.split('').reverse().join('');

    // Capitalize the first letter
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
const names = data.flatMap(group => group.map(person => person.name));
console.log(names);