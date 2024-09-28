# -*- coding: utf-8 -*-
# Copyright (c) Vispy Development Team. All Rights Reserved.
# Distributed under the (new) BSD License. See LICENSE.txt for more info.
import numbers

import numpy as np
from numpy.typing import ArrayLike
from vispy.gloo import Texture2D, VertexBuffer
from vispy.util.svg.color import Color
from vispy.visuals.filters import Filter
from vispy.visuals.shaders import Function, Varying

from ...color import Color

class TextureFilter(Filter):
    def __init__(self, texture: tuple | ArrayLike, texcoords: ArrayLike, enabled: bool = True): ...
    @property
    def enabled(self): ...
    @enabled.setter
    def enabled(self, enabled): ...
    @property
    def texture(self): ...
    @texture.setter
    def texture(self, texture): ...
    @property
    def texcoords(self): ...
    @texcoords.setter
    def texcoords(self, texcoords): ...
    def _update_texcoords_buffer(self, texcoords): ...
    def _attach(self, visual): ...

shading_vertex_template: str = ...

shading_fragment_template: str = ...  # noqa

def _as_rgba(intensity_or_color, default_rgb=(1.0, 1.0, 1.0)): ...

class ShadingFilter(Filter):
    def __init__(
        self,
        shading: str = "flat",
        ambient_coefficient: str | tuple | Color = ...,
        diffuse_coefficient: str | tuple | Color = ...,
        specular_coefficient: str | tuple | Color = ...,
        shininess: float = 100,
        light_dir: ArrayLike = ...,
        ambient_light: str | tuple | Color = ...,
        diffuse_light: str | tuple | Color = ...,
        specular_light: str | tuple | Color = ...,
        enabled: bool = True,
    ): ...
    @property
    def enabled(self): ...
    @enabled.setter
    def enabled(self, enabled): ...
    @property
    def shading(self): ...
    @shading.setter
    def shading(self, shading): ...
    @property
    def light_dir(self): ...
    @light_dir.setter
    def light_dir(self, direction): ...
    @property
    def ambient_light(self): ...
    @ambient_light.setter
    def ambient_light(self, light_color): ...
    @property
    def diffuse_light(self): ...
    @diffuse_light.setter
    def diffuse_light(self, light_color): ...
    @property
    def specular_light(self): ...
    @specular_light.setter
    def specular_light(self, light_color): ...
    @property
    def ambient_coefficient(self): ...
    @ambient_coefficient.setter
    def ambient_coefficient(self, color): ...
    @property
    def diffuse_coefficient(self): ...
    @diffuse_coefficient.setter
    def diffuse_coefficient(self, diffuse_coefficient): ...
    @property
    def specular_coefficient(self): ...
    @specular_coefficient.setter
    def specular_coefficient(self, specular_coefficient): ...
    @property
    def shininess(self): ...
    @shininess.setter
    def shininess(self, shininess): ...
    def _update_data(self): ...
    def on_mesh_data_updated(self, event): ...
    def _attach(self, visual): ...
    def _detach(self, visual): ...

wireframe_vertex_template: str = ...  # noqa

wireframe_fragment_template: str = ...  # noqa

class WireframeFilter(Filter):
    def __init__(
        self,
        enabled: bool = True,
        color: str | tuple | Color = "black",
        width: float = 1.0,
        wireframe_only=False,
        faces_only=False,
    ): ...
    @property
    def enabled(self): ...
    @enabled.setter
    def enabled(self, enabled): ...
    @property
    def color(self): ...
    @color.setter
    def color(self, color): ...
    @property
    def width(self): ...
    @width.setter
    def width(self, width): ...
    @property
    def wireframe_only(self): ...
    @wireframe_only.setter
    def wireframe_only(self, wireframe_only): ...
    @property
    def faces_only(self): ...
    @faces_only.setter
    def faces_only(self, faces_only): ...
    def _update_data(self): ...
    def on_mesh_data_updated(self, event): ...
    def _attach(self, visual): ...
    def _detach(self, visual): ...
