from .views import AccountViewSet, ArchetypeViewSet
from rest_framework.routers import DefaultRouter
# I have decided to use the DefaultRouter over the SimpleRouter because the Default includes hyperlinks

router = DefaultRouter()
router.register('accounts', AccountViewSet, basename='accounts')
router.register('archetypes', ArchetypeViewSet, basename='archetypes')
urlpatterns = router.urls
"""
[
    # Below is what the urlpatterns would look like without routers (pg 125)
    # Every account has their own ID. I should probably change this to uuid later for security reasons
    #path('<int:pk/', AccountDetail.as_view()),
    # Lists all accounts
    # path('', AccountList.as_view()),
]
"""
