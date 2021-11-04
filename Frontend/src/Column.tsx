import { FC } from "react";
import { ColumnContainer } from "./styles";

export const Column: FC = ({ children }) => {
    return (
        <ColumnContainer>
            {children}
        </ColumnContainer>
    )
}
