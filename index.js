import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript
const reverseSentence = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const data = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 32 }
    ],
    [
        { name: 'Bob', age: 24 },
        { name: 'Alice', age: 29 }
    ]
];

const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']