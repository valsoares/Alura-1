export async function createVideo(data) {
    const resposta = await fetch('http://localhost:3333/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (resposta.ok) {
        const r = await resposta.json();
        return r;
    }
    throw new Error('Não foi possível cadastrar!');
}

export async function createCategoria(data) {
    const resposta = await fetch('http://localhost:3333/categorias', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (resposta.ok) {
        const r = await resposta.json();
        return r;
    }
    throw new Error('Não foi possível cadastrar!');
}

export async function editCategoria(id, data) {
    const resposta = await fetch(`http://localhost:3333/categorias/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (resposta.ok) {
        const r = await resposta.json();
        return r;
    }
    throw new Error('Não foi possível editar!');
}

export async function deleteCategoria(id) {
    const resposta = await fetch(`http://localhost:3333/categorias/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    });
    if (resposta.ok) {
        const r = await resposta.json();
        return r;
    }
    throw new Error('Não foi possível deletar a categoria!');
}
