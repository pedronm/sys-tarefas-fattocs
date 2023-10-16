package fattocs.resources;

import java.util.List;
import fattocs.entities.Tarefa;
import fattocs.models.TarefaDTO;
import fattocs.services.TarefaService;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("tarefa")
public class TarefaResource {
    
    @Inject
    TarefaService service;

    @GET
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    public List<Tarefa> get(){
        return service.recuperarTarefas();
    }

    @POST
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Tarefa post(TarefaDTO dto){
        return service.persistirTarefa(0, dto);
    }

    @PUT
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public Tarefa put(@PathParam("id") Long id, TarefaDTO dto){
        return service.persistirTarefa(id, dto);
    }

    @DELETE
    @Transactional
    public boolean delete(@PathParam("id") Long id){
        return service.excluirTarefa(id);
    }
}
