<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css"/>
</head>
<body>
    <div>
        <h1>get</h1>
        <form action="/api/getTest" method="get">
            <p>your name:<input type="text"
                                placeholder="name"
                                name="name"/></p>
            <p>your age:<input type="number"
                              placeholder="age"
                              name="age"/></p>
            <input type="submit"/>
        </form>
    </div>
    <div>
        <h1>post</h1>
        <form action="/api/postTest" method="post">
            <p>your name:<input type="text"
                                placeholder="name"
                                name="name"/></p>
            <p>your age:<input type="number"
                               placeholder="age"
                               name="age"/></p>
            <input type="submit"/>
        </form>
    </div>
    <div>
        <h1>get</h1>
        <form action="/api/putTest" method="put">
            <p>your name:<input type="text"
                                placeholder="name"
                                name="name"/></p>
            <p>your age:<input type="number"
                               placeholder="age"
                               name="age"/></p>
            <input type="submit"/>
        </form>
    </div>
    <div>
        <h1>delete</h1>
        <form action="/api/deleteTest" method="delete">
            <p>your name:<input type="text"
                                placeholder="name"
                                name="name"/></p>
            <p>your age:<input type="number"
                               placeholder="age"
                               name="age"/></p>
            <input type="submit"/>
        </form>
    </div>
</body>
</html>