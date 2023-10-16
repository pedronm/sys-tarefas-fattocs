package fattocs.utilities;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.json.bind.JsonbConfig;
import jakarta.json.bind.config.PropertyVisibilityStrategy;
import jakarta.ws.rs.ext.ContextResolver;
import jakarta.ws.rs.ext.Provider;

@Provider
public class JsonConfig implements ContextResolver<Jsonb> {

    @Override
    public Jsonb getContext(Class type) {
        JsonbConfig config = new JsonbConfig();
        config.withPropertyVisibilityStrategy(new IgnoreMethods());
        return JsonbBuilder.create(config);
    }
   }

  class IgnoreMethods implements PropertyVisibilityStrategy {

    @Override
    public boolean isVisible(Field field) {
        return true;
    }

    @Override
    public boolean isVisible(Method method) {
        return false;
    }
}