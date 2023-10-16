package fattocs.models;

public class TarefaDTO  {
    public String nomeTarefa;
    public String custo;
    public String dtLimite;
    public String ordem;

    public TarefaDTO(){}

    public TarefaDTO(String nomeTarefa, String custo, String dtLimite, String ordem){
        this.nomeTarefa = nomeTarefa;
        this.custo = custo;
        this.dtLimite = dtLimite;
        this.ordem = ordem;
    }
}
