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

@Entity(name = "tarefas")
public class Tarefa extends PanacheEntityBase{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tarefas")
    @SequenceGenerator(name = "tarefas",  sequenceName = "tarefas_seq")
    @Column(name = "tarefa_id", nullable = false)
    Long tarefaId;
    @Column(name = "nome_tarefa", nullable=false)
    public String nomeTarefa;
    public Double custo;
    @Column(name = "dt_limite", nullable=false)
    public LocalDate dtLimite;
    public int ordem;

    public Long getId(){
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
