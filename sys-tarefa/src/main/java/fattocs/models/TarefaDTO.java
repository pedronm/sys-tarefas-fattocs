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

    public String getNomeTarefa(){
        return this.nomeTarefa;
    }
    
    public String getCusto(){
        return this.custo;
    }
    
    public String getDtLimite(){
        return this.dtLimite;
    }
    
    public String getOrdem(){
        return this.ordem;
    }

    public void setNomeTarefa(String nomeTarefa){
        this.nomeTarefa = nomeTarefa;
    }

    public void setCusto(String custo){
        this.custo = custo;
    }

    public void setDtLimite(String dtLimite){
        this.dtLimite = dtLimite;
    }

    public void setOrdem(String ordem){
        this.ordem = ordem;
    }
}
