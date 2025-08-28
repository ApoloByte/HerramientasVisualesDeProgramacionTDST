import React, { useState } from 'react'

export const SearchBox = () => {
    const [query, setQuery] = useState("Valor inicial");
    return (
        <>

            <h2>SearchBox</h2>
            <input name="myInput" value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <p>Buscando {query}</p>
        </>
    )
}
