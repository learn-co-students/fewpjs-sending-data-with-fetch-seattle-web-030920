//por default fetch() usa HTTP verb GET, por isso quando queremos
// MANDAR data para o servidor devemos especificar qual sera o metodo, neste caso POST.
// headers esta indicando especificamente que tipo de DATA estamos enviando( que neste caso sera text)
//em headers tambem eh de boa pratica especificar que tipo de data devemos aceitar 'accept':
//quando se MANDA data usando fetch eh preciso coloca-la no 'body'
//apos esta DATA ser attached no 'body:' precisamos converter este 'text' que foi citado acima 
//em um formato compativel ao json.db(que por sinal ao fazer isto(JSON.stringify) o data sera convertido
// para qualquer formato que seja. )
// logo apos especificamos as keys que foram providenciadas pelo form
//.then ira manipular este date que foi manipulado em "string"
//ate este momento a nossa DATA ainda eh uma "string", e nao queremos isto
//por isso devemos usar o primeiro .then para converter esta string em json format
//logo apos por ser um metodo POST, contudo ira alterar o HTML
//por isso devemos anexar ao body innerHTML =  object[ "id" ]
// .catch eh apenas uma mensagem para em caso o fetch falhe por alguma razao
//esta mensagem ira aparecer atraves do browser(apenas uma forma de falhar menos feio)
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }