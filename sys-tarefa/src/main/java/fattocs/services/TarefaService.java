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

    public Tarefa persistirTarefa(long id, TarefaDTO tarefa){
        Tarefa novaTarefa = new Tarefa();
        if( id != 0 )
            novaTarefa = Tarefa.findById(id);
        novaTarefa.setNomeTarefa(tarefa.nomeTarefa);
        novaTarefa.setCusto(Double.valueOf(tarefa.custo));
        novaTarefa.setDtLimite(LocalDate.parse(tarefa.dtLimite));
        novaTarefa.setOrdem( 1);
        novaTarefa.persist();
        return novaTarefa;
    }
}
