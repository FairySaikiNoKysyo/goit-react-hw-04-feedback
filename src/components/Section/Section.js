import { SectionFeedback, Title } from "./SectionStyled";

export const Section = ({title, children}) => {
    return (
        <SectionFeedback>
            <Title>{title}</Title>
            {children}            
        </SectionFeedback>
    );
};