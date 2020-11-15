import React, {useState} from 'react'


export default function Wave() {
    const [wave, setWave] = useState(0);
    const template = `${wave} ${wave > 1 ? 'waves' : 'wave'}`
    return (
        <button onClick={() => setWave(wave+1)}>
            {template}
        </button>
    )
}
