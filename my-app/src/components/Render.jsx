import React from 'react';
import data from './../news.json';

class Render extends React.Component{

    render() {

        return(
            <div>
                {data.map((item) => (
                    <div key={item.id} className="news m-5 ">

                        {item.isSpecial ? <div className="danger">особая новость</div> : null}

                        <h5>{item.title}</h5>

                        <div dangerouslySetInnerHTML={{__html: item.content}} />

                        <p>
                            <i>{item.dateCreated}</i>
                        </p>

                        <h4>Category</h4>

                        {item.categories ?
                            <ul>
                                {item.categories.map((cat) => (
                                    <li key={cat.id}>{cat.name}</li>
                                ))}
                            </ul>

                            : null
                        }

                        {item.link ?
                            <div className=" btn btn-primary">
                                <a href={item.link}>link</a>
                            </div>
                            : null
                        }



                        {item.photo ?
                            <div>
                                <img src={item.photo} alt="картинка"/>
                            </div>
                            : null
                        }

                        <p>
                            <b>{item.author}</b>
                        </p>

                    </div>
                ))}
            </div>

        )
    }
}

export default Render;
