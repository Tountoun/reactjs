import { useParams, Link } from 'react-router-dom';

function Survey() {
    const {questionNumber} = useParams();
    const questionIntValue = parseInt(questionNumber);
    const nextQuestion = questionIntValue + 1;
    const precQuestion = questionIntValue === 1 ? 1 : questionIntValue - 1;

    return (
        <div>
            <h2>Questionnaire</h2>
            <h3>Question number: {questionNumber}</h3>
            <Link to={`/survey/${precQuestion}`}>Précédent</Link>
            
            { 
                questionIntValue === 10 ? 
                    (
                        <Link to='/results'>Résultats</Link>
                    )
                    :
                    (
                        <Link 
                            to={`/survey/${nextQuestion}`}
                            >Suivant</Link>
                    ) 
            }
            
        </div>
    );
}

export default Survey;