package fattocs.services;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import fattocs.entities.Tarefa;
import fattocs.models.TarefaDTO;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TarefaService {
    
    public List<Tarefa> recuperarTarefas(){
        return Tarefa.findAll().list();
    }

    public boolean excluirTarefa(long id){
        return Tarefa.deleteById(id);
    }

    public Tarefa persistirTarefa( TarefaDTO tarefa){
        Tarefa novaTarefa = new Tarefa();
        novaTarefa.setNomeTarefa(tarefa.nomeTarefa);
        novaTarefa.setCusto(Double.valueOf(tarefa.custo));
        novaTarefa.setDtLimite(LocalDate.parse(tarefa.dtLimite));
        novaTarefa.setOrdem( Integer.valueOf(tarefa.ordem) );
        novaTarefa.persist();
        return novaTarefa;
    }

    public Tarefa alterarTarefa(Long id, TarefaDTO tarefa){
        Tarefa taf = Tarefa.findById(id);
        taf.setNomeTarefa(tarefa.nomeTarefa);
        taf.setCusto( Double.valueOf(tarefa.custo));
        taf.setDtLimite( LocalDate.parse(tarefa.dtLimite));
        taf.setOrdem( Integer.valueOf(tarefa.ordem) );
        return taf;
    }
}   
