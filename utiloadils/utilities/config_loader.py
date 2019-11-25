# import yaml

class LoadTestConfig:
    def __init__(self, config):
        self.config = config

    # def url(self):
    #     return self.config['url']

class ConfigLoader:

    def __init__(self):
        pass
    
    def load(self, configFile='dev_config.yaml'):
        # config_data = yaml.load(file(configFile, 'r'))
        # return LoadTestConfig(config_data)
        return ''
