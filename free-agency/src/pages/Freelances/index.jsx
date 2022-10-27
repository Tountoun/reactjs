import Card from "../../components/Card";
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/styles/Colors'
function Freelances() {
    const freelances = [
        {
            name: 'Jane Doe',
            jobTitle: 'Devops',
            picture: DefaultPicture,
        },
        {
            name: 'John Doe',
            jobTitle: 'Developpeur frontend',
            picture: DefaultPicture,
        },
        {
            name: 'Jeanne Biche',
            jobTitle: 'Développeuse Fullstack',
            picture: DefaultPicture,
        },
    ]
    const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    `
    const PageTitle = styled.h1`
    font-size: 30px;
    color: black;
    text-align: center;
    padding-bottom: 30px;
    `

    const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    `

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez FreelAG nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelances.map((freelance, index) =>
                    <Card
                        key={`${freelance.name}-${index}`}
                        label={freelance.jobTitle}
                        title={freelance.name}
                        picture={freelance.picture}
                    />
                )}
            </CardsContainer>
        </div>
    );
}

export default Freelances;