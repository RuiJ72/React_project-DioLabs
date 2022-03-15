type Props = {
    name: string;
    age: number;
}

export const Header = ({ name, age }: Props) => {
    return (
            <>
                <h1>Olá {name}, tudo bem? {age} anos. Parabéns!</h1>
            </>
    );
}

