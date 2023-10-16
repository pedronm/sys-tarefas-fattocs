CREATE TABLE IF NOT EXISTS tarefa (
    tarefa_id serial NOT NULL PRIMARY KEY, 
    nome_tarefa VARCHAR(100) UNIQUE NOT NULL,
    custo real null,
    dt_limite Date,
    ordem integer not null
); 

CREATE SEQUENCE IF NOT EXISTS tarefa_seq
START WITH 1
INCREMENT BY 1
OWNED BY tarefa.tarefa_id;