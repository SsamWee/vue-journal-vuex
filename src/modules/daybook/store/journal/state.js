//Es reactivo y cuando se cambia se notifican a los componentes 
//donde esten escuchando los cambios del state, donde se guarda la informacion

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            Text: 'Sunt fugiat dolor minim sint fugiat occaecat pariatur quis nisi et esse.',
            picture: null, 
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            Text: 'Aute laborum nisi enim ea quis labore aliquip sint est deserunt nulla voluptate excepteur.',
            picture: null, 
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            Text: 'Cillum esse quis aute ad.Minim irure cupidatat aliqua voluptate.',
            picture: null, 
        },
    ]

})


