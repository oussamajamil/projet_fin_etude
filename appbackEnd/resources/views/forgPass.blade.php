<h1>bonjour {{$data1['user_name']}}</h1>
<p><h3>pour modifier mode passe de votre session s'il vous plait click sur  button</h3>
    <p>Le code de security de ta session est :<span style="color: red">{{$data1['nouvellePasse']}}</span></p>
    <button><a href="http://localhost:3000/forgitPass/{{$data1['email']}}">Modifier mode passe</a></button>