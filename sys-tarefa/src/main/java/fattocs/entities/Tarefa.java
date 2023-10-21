package fattocs.entities;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.aayushatharva.brotli4j.common.annotations.Local;

import fattocs.models.TarefaDTO;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity(name = "tarefa")
public class Tarefa extends PanacheEntityBase{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tarefa")
    @SequenceGenerator(name = "tarefa",  sequenceName = "tarefa_seq")
    @Column(name = "tarefa_id", nullable = false)
    private Long tarefaId;
    @Column(name = "nome_tarefa", nullable=false)
    private String nomeTarefa;
    private Double custo;
    @Column(name = "dt_limite", nullable=false)
    private LocalDate dtLimite;
    private int ordem;

    public Long getTarefaId(){
        return this.tarefaId;
    }

    public String getNomeTarefa(){
        return this.nomeTarefa;
    }

    public Double getCusto(){
        return this.custo;
    }

    public LocalDate getDtLimite(){
        return this.dtLimite;
    }
    
    public int getOrdem(){
        return this.ordem;
    }

    public void setTarefaId(Long tarefaId){
        this.tarefaId = tarefaId;
    }

    public void setNomeTarefa(String nome){
        this.nomeTarefa = nome;
    }

    public void setCusto(Double custo){
        this.custo = custo;
    }

    public void setDtLimite(LocalDate data){
        this.dtLimite = data;
    }

    public void setOrdem(int ordem){
        this.ordem = ordem;
    }
}
