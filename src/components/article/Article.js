import './Arcticle.css'
import male from '../img/male.png'
import female from '../img/female.png'

function Article(props) {
    // function Article( props ) {
    // const { title = "<h1> Заголовок статьи </h1>", content = "<p> Содержимое статьи </p>" } = props;
    let { db } = props;
    return (
        <article>
            <hr />
            <div className='app'>

                <div className='card-block'>
                    {
                        Object.keys(db).map(
                            elem => {
                                return (
                                    <div className='card' key={elem}>
                                        <img className='photo' src={db[elem].photo} alt="photo" width={400} height={500} />
                                        <div className='description'>
                                            <div className='full-name'>
                                                Full Name:
                                                <br />
                                                {db[elem].name} {db[elem].surname}
                                                <br />
                                                Age: {db[elem].age}
                                            </div>
                                            <div className='gender'>
                                                <img src={db[elem].pol === 'male' ? male : female} alt="gender" />
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )
                    }
                    {/* #region card-first-elem */}

                    {/* <img src={db.photo} alt="photo" />
                    <div className='name'>{db.name} {db.surname}</div>
                    <div className='gender'>
                        <img src={gender} alt="gender" />
                    </div>
                    <div className='age'>{db.age}</div> */}
                    {/* #endregion */}

                </div>

            </div>

            {/* #region  values by default*/}

            {
                /*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/* <div dangerouslySetInnerHTML={{__html: `${title} ${content}`}}/> */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/*!!!!!!!!!!!!!!!!!
                НИКОГДА ТАК НЕ ДЕЛАТЬ,
                ЕСЛИ ДАННЫЕ НЕ МОИ(Допустим пользовать вводит данные в input)
                ОПАСТНОСТЬ XSS-АТАКИ
                !!!!!!!!!!!!!!!!! */}
            {/* #endregion */}

            <hr />

        </article>
    );
}
/* 
    This is block comment
*/
// Является устаревшим подходом для функцианального подхода
// (Все ещёВ используется в классовом (ООП) подходе)
// с React 19, новый подход использует деструкторизацию
// Пример выше
// https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-proptypes-and-defaultprops
// https://react.dev/learn/passing-props-to-a-component
// Article.defaultProps = {
//     title: "Заголовок статьи",
//     content: "Содержимое статьи",
// };

export default Article;